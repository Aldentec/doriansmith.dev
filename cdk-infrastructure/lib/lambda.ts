import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export function setupLambda(stack: cdk.Stack) {
    const sendEmailFunction = new lambda.Function(stack, 'SendEmailFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        code: lambda.Code.fromAsset('lambdas/send-email'),
        handler: 'index.handler',
        environment: {
            EMAIL_RECIPIENT: 'doriansmith89@gmail.com',
        },
    });
    return sendEmailFunction;
}
