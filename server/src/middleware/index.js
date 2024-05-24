import hashPassword from "./hashPassword.js";
import checkUserId from "./checkUserId.js";
import verifyToken from "./verifyToken.js";
import validationCheck from "./validationCheck.js";

const middlewares = {
	hashPassword,
	checkUserId,
	verifyToken,
	validationCheck
}

export default middlewares