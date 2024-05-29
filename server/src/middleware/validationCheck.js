import { validationResult } from "express-validator";
import CustomError from "../helpers/customError.js";

const validationCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new CustomError(400, "", { ...errors.array() });
  }
  return next();
};

export default validationCheck;
