import hashPassword from "./hashPassword.js";
import passwordSecurity from "./passwordSecurity.js";
import validateRegister from "./validateRegister.js";
import validateLogin from "./validateLogin.js";
import checkUserId from "./checkUserId.js";

const middlewares = {
	hashPassword,
	passwordSecurity,
	validateRegister,
	validateLogin,
	checkUserId
}

export default middlewares