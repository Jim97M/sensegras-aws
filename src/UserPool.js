import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : "us-east-1_8INQuHIiS",
    ClientId: "3pe96do77c3ct68s4e1cIqusjc"
}

export default new CognitoUserPool(poolData);