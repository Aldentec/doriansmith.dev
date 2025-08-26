"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPermissions = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const iam = require("aws-cdk-lib/aws-iam");
function setupPermissions(stack, apiGatewayLoggingRole, sendEmailFunction) {
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
exports.setupPermissions = setupPermissions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJtaXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsaURBQWlEO0FBQ2pELDJDQUEyQztBQUUzQyxTQUFnQixnQkFBZ0IsQ0FBQyxLQUFnQixFQUFFLHFCQUErQixFQUFFLGlCQUFrQztJQUVsSCxNQUFNLDhCQUE4QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLEVBQUU7UUFDaEcsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7OENBYVMscUJBQXFCLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7U0FXbEUsQ0FBQztLQUNMLENBQUMsQ0FBQztJQUVILHFFQUFxRTtJQUNyRSw4QkFBOEIsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ25FLE9BQU8sRUFBRTtZQUNMLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsbUJBQW1CO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO0tBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUosa0ZBQWtGO0lBQ2xGLDhCQUE4QixDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDbkUsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDckMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO0tBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSwwQkFBMEIsRUFBRTtRQUM3RSxZQUFZLEVBQUUsOEJBQThCLENBQUMsV0FBVztLQUMzRCxDQUFDLENBQUM7SUFDSCxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBRWxFLGdEQUFnRDtJQUNoRCxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ3RELE9BQU8sRUFBRTtZQUNQLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLHNCQUFzQjtTQUN2QjtRQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztLQUNuQixDQUFDLENBQUMsQ0FBQztJQUVKLGtFQUFrRTtJQUNsRSxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ3RELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7S0FDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLGNBQWMsQ0FBQztBQUMxQixDQUFDO0FBMUVELDRDQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcclxuaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUGVybWlzc2lvbnMoc3RhY2s6IGNkay5TdGFjaywgYXBpR2F0ZXdheUxvZ2dpbmdSb2xlOiBpYW0uUm9sZSwgc2VuZEVtYWlsRnVuY3Rpb246IGxhbWJkYS5GdW5jdGlvbikge1xyXG5cclxuICAgIGNvbnN0IHNldEFwaUdhdGV3YXlBY2NvdW50Um9sZUxhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdTZXRBcGlHYXRld2F5QWNjb3VudFJvbGVMYW1iZGEnLCB7XHJcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE2X1gsXHJcbiAgICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxyXG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21JbmxpbmUoYFxyXG4gICAgICAgICAgICBjb25zdCBBV1MgPSByZXF1aXJlKCdhd3Mtc2RrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWlyZSgnY2ZuLXJlc3BvbnNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwaWdhdGV3YXkgPSBuZXcgQVdTLkFQSUdhdGV3YXkoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudCwgY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuUmVxdWVzdFR5cGUgPT09ICdDcmVhdGUnIHx8IGV2ZW50LlJlcXVlc3RUeXBlID09PSAnVXBkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGlnYXRld2F5LnVwZGF0ZUFjY291bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hPcGVyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcDogJ3JlcGxhY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnL2Nsb3Vkd2F0Y2hSb2xlQXJuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcke2FwaUdhdGV3YXlMb2dnaW5nUm9sZS5yb2xlQXJufScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnByb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZChldmVudCwgY29udGV4dCwgcmVzcG9uc2UuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5zZW5kKGV2ZW50LCBjb250ZXh0LCByZXNwb25zZS5GQUlMRUQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGApLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR3JhbnQgcGVybWlzc2lvbnMgdG8gdGhlIExhbWJkYSBmdW5jdGlvbiB0byBsb2cgdG8gQ2xvdWRXYXRjaCBMb2dzXHJcbiAgICBzZXRBcGlHYXRld2F5QWNjb3VudFJvbGVMYW1iZGEuYWRkVG9Sb2xlUG9saWN5KG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcclxuICAgICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxyXG4gICAgICAgICAgICBcImxvZ3M6Q3JlYXRlTG9nU3RyZWFtXCIsXHJcbiAgICAgICAgICAgIFwibG9nczpQdXRMb2dFdmVudHNcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVzb3VyY2VzOiBbXCIqXCJdXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gR3JhbnQgcGVybWlzc2lvbnMgdG8gdGhlIExhbWJkYSBmdW5jdGlvbiB0byB1cGRhdGUgQVBJIEdhdGV3YXkgYWNjb3VudCBzZXR0aW5nc1xyXG4gICAgc2V0QXBpR2F0ZXdheUFjY291bnRSb2xlTGFtYmRhLmFkZFRvUm9sZVBvbGljeShuZXcgaWFtLlBvbGljeVN0YXRlbWVudCh7XHJcbiAgICAgICAgYWN0aW9uczogWydhcGlnYXRld2F5OlVwZGF0ZUFjY291bnQnXSxcclxuICAgICAgICByZXNvdXJjZXM6IFsnKiddXHJcbiAgICB9KSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGN1c3RvbVJlc291cmNlID0gbmV3IGNkay5DdXN0b21SZXNvdXJjZShzdGFjaywgJ1NldEFwaUdhdGV3YXlBY2NvdW50Um9sZScsIHtcclxuICAgICAgICBzZXJ2aWNlVG9rZW46IHNldEFwaUdhdGV3YXlBY2NvdW50Um9sZUxhbWJkYS5mdW5jdGlvbkFyblxyXG4gICAgfSk7XHJcbiAgICBjdXN0b21SZXNvdXJjZS5ub2RlLmFkZERlcGVuZGVuY3koc2V0QXBpR2F0ZXdheUFjY291bnRSb2xlTGFtYmRhKTtcclxuICAgIFxyXG4gICAgLy8gR3JhbnQgcGVybWlzc2lvbnMgdG8gd3JpdGUgbG9ncyB0byBDbG91ZFdhdGNoXHJcbiAgICBhcGlHYXRld2F5TG9nZ2luZ1JvbGUuYWRkVG9Qb2xpY3kobmV3IGlhbS5Qb2xpY3lTdGF0ZW1lbnQoe1xyXG4gICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgIFwibG9nczpDcmVhdGVMb2dHcm91cFwiLFxyXG4gICAgICAgICAgXCJsb2dzOkNyZWF0ZUxvZ1N0cmVhbVwiLFxyXG4gICAgICAgICAgXCJsb2dzOkRlc2NyaWJlTG9nR3JvdXBzXCIsXHJcbiAgICAgICAgICBcImxvZ3M6RGVzY3JpYmVMb2dTdHJlYW1zXCIsXHJcbiAgICAgICAgICBcImxvZ3M6UHV0TG9nRXZlbnRzXCIsXHJcbiAgICAgICAgICBcImxvZ3M6R2V0TG9nRXZlbnRzXCIsXHJcbiAgICAgICAgICBcImxvZ3M6RmlsdGVyTG9nRXZlbnRzXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlc291cmNlczogW1wiKlwiXSxcclxuICAgIH0pKTtcclxuICBcclxuICAgIC8vIEdyYW50IHBlcm1pc3Npb25zIHRvIHRoZSBMYW1iZGEgZnVuY3Rpb24gdG8gc2VuZCBlbWFpbHMgdmlhIFNFU1xyXG4gICAgc2VuZEVtYWlsRnVuY3Rpb24uYWRkVG9Sb2xlUG9saWN5KG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcclxuICAgICAgICBhY3Rpb25zOiBbJ3NlczpTZW5kRW1haWwnLCAnc2VzOlNlbmRSYXdFbWFpbCddLFxyXG4gICAgICAgIHJlc291cmNlczogWycqJ11cclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4gY3VzdG9tUmVzb3VyY2U7XHJcbn1cclxuXHJcbiJdfQ==