import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const userSub = event.headers['X-Mock-User-Sub'] || event.requestContext.authorizer?.claims.sub;
        const userGroups =
            event.headers['X-Mock-User-Groups']?.split(',') ||
            event.requestContext.authorizer?.claims['cognito:groups'];

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User information retrieved successfully',
                userSub: userSub,
                userGroups: userGroups,
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
