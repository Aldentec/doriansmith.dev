import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { setupLambda } from './lambda';
import { setupApiGateway } from './apigateway';
import { setupPermissions } from './permissions';

export class CdkInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Set up Lambda
    const sendEmailFunction = setupLambda(this);

    // IAM role for APIG logging
    const apiGatewayLoggingRole = new iam.Role(this, 'ApiGatewayLoggingRole', {
      assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
    });

    // Set up Custom Resource
    const customResource = setupPermissions(this, apiGatewayLoggingRole, sendEmailFunction);

    // Set up API Gateway
    const sendEmailApi = setupApiGateway(this, sendEmailFunction);

    // Ensure API Gateway deployment waits for custom resource execution
    sendEmailApi.node.addDependency(customResource);
  }
}
