"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupLambda = void 0;
const lambda = require("aws-cdk-lib/aws-lambda");
function setupLambda(stack) {
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
exports.setupLambda = setupLambda;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUFpRDtBQUVqRCxTQUFnQixXQUFXLENBQUMsS0FBZ0I7SUFDeEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFO1FBQ3RFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1FBQ2pELE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFdBQVcsRUFBRTtZQUNULGVBQWUsRUFBRSx5QkFBeUI7U0FDN0M7S0FDSixDQUFDLENBQUM7SUFDSCxPQUFPLGlCQUFpQixDQUFDO0FBQzdCLENBQUM7QUFWRCxrQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExhbWJkYShzdGFjazogY2RrLlN0YWNrKSB7XHJcbiAgICBjb25zdCBzZW5kRW1haWxGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oc3RhY2ssICdTZW5kRW1haWxGdW5jdGlvbicsIHtcclxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTZfWCxcclxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYXMvc2VuZC1lbWFpbCcpLFxyXG4gICAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcclxuICAgICAgICBlbnZpcm9ubWVudDoge1xyXG4gICAgICAgICAgICBFTUFJTF9SRUNJUElFTlQ6ICdkb3JpYW5zbWl0aDg5QGdtYWlsLmNvbScsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlbmRFbWFpbEZ1bmN0aW9uO1xyXG59XHJcbiJdfQ==