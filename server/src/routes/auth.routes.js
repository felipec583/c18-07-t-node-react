import express from "express";
import middlewares from "../middleware/index.js"
import authController from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/auth/register", middlewares.validateRegister, middlewares.passwordSecurity, middlewares.hashPassword, authController.registerUser)
router.post("/auth/login", middlewares.validateLogin, middlewares.passwordSecurity, authController.loginUser)

export default router