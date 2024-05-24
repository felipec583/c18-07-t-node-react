import hashPassword from "./hashPassword.js";
import checkUserId from "./checkUserId.js";
import verifyToken from "./verifyToken.js";

const middlewares = {
	hashPassword,
	checkUserId,
	verifyToken
}

export default middlewares