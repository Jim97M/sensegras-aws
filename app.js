const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

const UserPoolId = ""
const ClientId = ""

const poolData = {
    UserPoolId,
    ClientId
}

AWS.config.update({
    region: 'eu-central-1'
})

async function registerUser(json){
    const {
      email,
      password
    } = json

    return new Promise((resolve, reject) => {
        let attributeList = []
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "email",
            Value: email
        }));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "password",
            Value: password
        }));

        const userPool = new AmazonCognitoIdentity.CognitoAccessToken(poolData);
        userPool.signUp(email, password, attributeList, null, function(err, result){
            if(err){
                return resolve({
                    statusCode: 500,
                    err
                })
            }
            resolve({
                statusCode: 200,
                confirmationCode,
                message: 'User Successfully Registered'
            })
        }) 
    })

}

exports.handler = async function (event, context, callback){
    const json = JSON.parse(event.body)
    const result = await registerUser(json)

    callback(null, {
        statusCode: result.statusCode,
        body: JSON.stringify(result)
    })
}