import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const userSub = event.requestContext.authorizer?.claims.sub;
        const userGroups = event.requestContext.authorizer?.claims['cognito:groups'];
        // console.log('userSub:', userSub);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'User information retrieved successfully',
                userSub: userSub,
                userGroups: userGroups,
            }),
        };
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify({
        //         message: 'hello world',
        //     }),
        // };
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
