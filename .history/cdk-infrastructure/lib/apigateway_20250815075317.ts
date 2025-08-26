import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';

export function setupApiGateway(stack: cdk.Stack, sendEmailFunction: LambdaFunction) {
    const sendEmailApi = new apigateway.LambdaRestApi(stack, 'SendEmailAPI', {
        handler: sendEmailFunction,
        proxy: true, // This handles ALL routes automatically
        deployOptions: {
            loggingLevel: apigateway.MethodLoggingLevel.INFO,
            dataTraceEnabled: true,
            accessLogDestination: new apigateway.LogGroupLogDestination(new logs.LogGroup(stack, 'ApiGatewayLogs')),
            accessLogFormat: apigateway.AccessLogFormat.clf()
        },
        defaultCorsPreflightOptions: {
            allowOrigins: apigateway.Cors.ALL_ORIGINS,
            allowMethods: ['GET', 'POST', 'OPTIONS'],
            allowHeaders: ['Content-Type', 'Authorization'],
            allowCredentials: false,
        },
    });

    // When proxy: true, you DON'T manually add resources or methods
    // The LambdaRestApi automatically routes ALL requests to your Lambda
    // Your Lambda function handles the routing logic

    return sendEmailApi;
}