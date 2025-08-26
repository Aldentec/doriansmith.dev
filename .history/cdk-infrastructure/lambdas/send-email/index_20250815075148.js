const AWS = require('aws-sdk');
const SES = new AWS.SES();

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));

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

  // Check if this is the correct path (when using proxy: true, all paths go to Lambda)
  if (!event.path || (!event.path.includes('send-email') && event.path !== '/')) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
      },
      body: JSON.stringify({ message: 'Not Found' })
    };
  }

  try {
    // Parse the request body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: JSON.stringify({ message: 'Invalid JSON in request body' })
      };
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: JSON.stringify({ message: 'Missing required fields: name, email, message' })
      };
    }
    
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

    console.log('Sending email with params:', JSON.stringify(params, null, 2));
    await SES.sendEmail(params).promise();
    console.log('Email sent successfully');
    
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