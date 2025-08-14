import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

export function setupPermissions(stack: cdk.Stack, apiGatewayLoggingRole: iam.Role, sendEmailFunction: lambda.Function) {

    const setApiGatewayAccountRoleLambda = new lambda.Function(stack, 'SetApiGatewayAccountRoleLambda', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromInline(`
            const AWS = require('aws-sdk');
            const response = require('cfn-response');
            const apigateway = new AWS.APIGateway();
            
            exports.handler = async (event, context) => {
                try {
                    if (event.RequestType === 'Create' || event.RequestType === 'Update') {
                        await apigateway.updateAccount({
                            patchOperations: [
                                {
                                    op: 'replace',
                                    path: '/cloudwatchRoleArn',
                                    value: '${apiGatewayLoggingRole.roleArn}',
                                },
                            ],
                        }).promise();
                    }
                    response.send(event, context, response.SUCCESS);
                } catch (e) {
                    console.error(e);
                    response.send(event, context, response.FAILED);
                }
            };
        `),
    });

    // Grant permissions to the Lambda function to log to CloudWatch Logs
    setApiGatewayAccountRoleLambda.addToRolePolicy(new iam.PolicyStatement({
        actions: [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
        ],
        resources: ["*"]
    }));

    // Grant permissions to the Lambda function to update API Gateway account settings
    setApiGatewayAccountRoleLambda.addToRolePolicy(new iam.PolicyStatement({
        actions: ['apigateway:UpdateAccount'],
        resources: ['*']
    }));
    
    const customResource = new cdk.CustomResource(stack, 'SetApiGatewayAccountRole', {
        serviceToken: setApiGatewayAccountRoleLambda.functionArn
    });
    customResource.node.addDependency(setApiGatewayAccountRoleLambda);
    
    // Grant permissions to write logs to CloudWatch
    apiGatewayLoggingRole.addToPolicy(new iam.PolicyStatement({
        actions: [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:DescribeLogGroups",
          "logs:DescribeLogStreams",
          "logs:PutLogEvents",
          "logs:GetLogEvents",
          "logs:FilterLogEvents"
        ],
        resources: ["*"],
    }));
  
    // Grant permissions to the Lambda function to send emails via SES
    sendEmailFunction.addToRolePolicy(new iam.PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*']
    }));

    return customResource;
}

