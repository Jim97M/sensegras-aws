import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : process.env.USERPOOL,
    ClientId: process.env.CLIENTID
}

export default new CognitoUserPool(poolData);