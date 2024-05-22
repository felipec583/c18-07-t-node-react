import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user/library", userController.addBookToUserLibrary);

export default router;
