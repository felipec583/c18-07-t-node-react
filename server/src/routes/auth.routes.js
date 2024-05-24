import express from "express";
import middlewares from "../middleware/index.js"
import authController from "../controllers/auth.controller.js";
import validators from "../middleware/validators.js";
import { validationResult, } from "express-validator";

const router = express.Router();

const errorCheck = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      response: errors.array()
    })
  }
  return next()
}

router.post("/register", [validators.email(), validators.password(), validators.username()], errorCheck, middlewares.hashPassword, authController.registerUser)
router.post("/login", [validators.username(), validators.password()], errorCheck, authController.loginUser)

export default router