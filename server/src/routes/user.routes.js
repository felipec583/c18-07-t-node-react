import express from "express";
import userController from "../controllers/user.controller.js";
import middlewares from "../middleware/index.js";
const router = express.Router();

router.post(
	"/user/library",
	middlewares.checkUserId,
	userController.addBookToUserLibrary
);
router.get(
	"/user/library/:id",
	middlewares.checkUserId,
	userController.getUserLibrary
);
router.delete(
	"/user/library",
	middlewares.checkUserId,
	userController.deleteBookFromUserLibrary
);

export default router;