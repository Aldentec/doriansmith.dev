import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
export declare function setupPermissions(stack: cdk.Stack, apiGatewayLoggingRole: iam.Role, sendEmailFunction: lambda.Function): cdk.CustomResource;
