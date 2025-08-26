import * as cdk from 'aws-cdk-lib';
import { Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
export declare function setupApiGateway(stack: cdk.Stack, sendEmailFunction: LambdaFunction): cdk.aws_apigateway.LambdaRestApi;
