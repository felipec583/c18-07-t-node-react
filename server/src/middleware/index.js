import hashPassword from "./hashPassword.js";
import checkUserId from "./checkUserId.js";
import verifyToken from "./verifyToken.js";
import validationCheck from "./validationCheck.js";
import errorHandler from "./errorHandler.js";
import notFoundHandler from "./notFoundHandler.js";

const middlewares = {
  hashPassword,
  checkUserId,
  verifyToken,
  validationCheck,
  errorHandler,
  notFoundHandler,
};

export default middlewares;
