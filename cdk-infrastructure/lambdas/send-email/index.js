const AWS = require('aws-sdk');
const SES = new AWS.SES();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  
  // Define the verified email address
  const verifiedEmail = 'dorianalden89@gmail.com';

  const params = {
    Source: verifiedEmail, // Using the verified Gmail address as the sender
    Destination: {
      ToAddresses: [verifiedEmail], // Using the verified Gmail address as the recipient
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

  try {
    await SES.sendEmail(params).promise();
    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
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
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: JSON.stringify({ message: 'Failed to send email.' }),
    };
  }
};
