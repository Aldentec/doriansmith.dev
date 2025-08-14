import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';

export function setupApiGateway(stack: cdk.Stack, sendEmailFunction: LambdaFunction) {
    const sendEmailApi = new apigateway.LambdaRestApi(stack, 'SendEmailAPI', {
        handler: sendEmailFunction,
        proxy: false,
        deployOptions: {
            loggingLevel: apigateway.MethodLoggingLevel.INFO,
            dataTraceEnabled: true,
            accessLogDestination: new apigateway.LogGroupLogDestination(new logs.LogGroup(stack, 'ApiGatewayLogs')),
            accessLogFormat: apigateway.AccessLogFormat.clf()
        },
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(sendEmailFunction);

    const sendEmailResource = sendEmailApi.root.addResource('send-email');

    // Add POST method with Lambda integration
    sendEmailResource.addMethod('POST', lambdaIntegration, {
        methodResponses: [{
            statusCode: '200',
            responseParameters: {
                'method.response.header.Access-Control-Allow-Origin': true,
                'method.response.header.Access-Control-Allow-Methods': true,
                'method.response.header.Access-Control-Allow-Headers': true,
                'method.response.header.Access-Control-Allow-Credentials': true,
            },
        }]
    });

    // Add OPTIONS method with mock integration for CORS
    sendEmailResource.addMethod('OPTIONS', new apigateway.MockIntegration({
        integrationResponses: [{
            statusCode: '200',
            responseParameters: {
                'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
                'method.response.header.Access-Control-Allow-Origin': "'*'",
                'method.response.header.Access-Control-Allow-Credentials': "'false'",
                'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,POST'",
            },
        }],
        passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
        requestTemplates: {
            "application/json": "{\"statusCode\": 200}"
        },
    }), {
        methodResponses: [{
            statusCode: '200',
            responseParameters: {
                'method.response.header.Access-Control-Allow-Headers': true,
                'method.response.header.Access-Control-Allow-Methods': true,
                'method.response.header.Access-Control-Allow-Credentials': true,
                'method.response.header.Access-Control-Allow-Origin': true,
            },
        }],
    });

    return sendEmailApi;
}
