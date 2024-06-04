import express from "express";
import middlewares from "../middleware/index.js";
import authController from "../controllers/auth.controller.js";
import validators from "../middleware/validators.js";
import { validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [validators.email(), validators.password(), validators.username()],
  middlewares.validationCheck,
  middlewares.hashPassword,
  authController.registerUser
);
router.post(
  "/login",
  [validators.username(), validators.password()],
  middlewares.validationCheck,
  authController.loginUser
);
router.post("/google", authController.googleAuth);

export default router;
