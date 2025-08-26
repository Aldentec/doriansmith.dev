const AWS = require('aws-sdk');
const SES = new AWS.SES();

exports.handler = async (event) => {
  // Handle preflight OPTIONS requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: ''
    };
  }

  // Only allow POST requests for the actual email sending
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Define the verified email address
    const verifiedEmail = 'dorianalden89@gmail.com';

    const params = {
      Source: verifiedEmail,
      Destination: {
        ToAddresses: [verifiedEmail],
      },
      Message: {
        Body: {
          Text: {
            Data: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
          },
        },
        Subject: {
          Data: 'doriansmith.dev Contact Form Submission',
        },
      },
    };

    await SES.sendEmail(params).promise();
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
    
  } catch (error) {
    console.error("Error sending email:", error);
    
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ 
        message: 'Failed to send email.',
        error: error.message 
      })
    };
  }
};