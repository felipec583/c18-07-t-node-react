import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user/library", userController.addBookToUserLibrary);
router.get("/user/library/:id", userController.getUserLibrary);
router.delete("/user/library", userController.deleteBookFromUserLibrary);

export default router;
