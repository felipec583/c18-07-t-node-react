import hashPassword from "./hashPassword.js";
import passwordSecurity from "./passwordSecurity.js";
import validateRegister from "./validateRegister.js";
import validateLogin from "./validateLogin.js";

const middlewares = {
	hashPassword,
	passwordSecurity,
	validateRegister,
	validateLogin,
}

export default middlewares