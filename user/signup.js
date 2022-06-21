const AWS = require('aws-sdk');
const {authResponse, validateUser} = require('../functions/index');
const cognito = AWS.CognitoIdentityServiceProvider()

module.exports.handler = async(event) => {
    try {
        const isValid = validateUser(event.body)
        if(!isValid){
            return authResponse(400, {message:"Invalid Input"})
        }
        const {email, password} = JSON.parse(event.body)
        const{user_pool_id} = process.env
        const params = {
            UserPoolId: user_pool_id,
            Username: email,
            UserAttributes: [
                {
                    Name: 'email',
                    Value: email
                },
                {
                    Name: 'email_verified',
                    Value: 'true'
                }
            ],
            MessageAction: 'SUPPRESS'
        }
        const response = await cognito.adminCreateUser(params).promise();
        if(response.User){
            const paramsForSetPass = {
                Password: password,
                UserPoolId: user_pool_id,
                Username: email,
                Permanent: true
            };
            await cognito.adminSetUserPassword(paramsForSetPass).promise()
        }
        return authResponse(200, {message: 'User Registration Successful'})
    } catch (error) {
        const message = error.message ? error.message : 'Internal Server Error'
        return authResponse(500, {message})
    }
}