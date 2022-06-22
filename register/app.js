const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

const UserPoolId = "us-east-1_8INQuHIiS"
const ClientId = "3pe96do77c3ct68s4e1cIqusjc"

const poolData = {
    UserPoolId,
    ClientId
}

AWS.config.update({
    region: 'us-east-1'
})

async function registerUser(json){
    const {
      telephoneNumber,
      confirmationCode,
      password
    } = json

    return new Promise((resolve, reject) => {
        let attributeList = []
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "phone_number",
            Value: telephoneNumber
        }));
        
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "custom:confirmationCode",
            Value: confirmationCode
        }));

        const userPool = new AmazonCognitoIdentity.CognitoAccessToken(poolData);
        userPool.signUp(telephoneNumber, password, attributeList, null, function(err, result){
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

exports.handler = async function(event, context, callback){
    const json = JSON.parse(event.body)
    const result = await registerUser(json)

    callback(null, {
        statusCode: result.statusCode,
        body: JSON.stringify(result)
    })
}