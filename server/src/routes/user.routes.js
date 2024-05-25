import express from "express";
import userController from "../controllers/user.controller.js";
import middlewares from "../middleware/index.js";
import validators from "../middleware/validators.js";

const router = express.Router();

router.post(
	"/library",
	middlewares.verifyToken,
	userController.addBookToUserLibrary
);
router.get(
	"/library/:id",
	middlewares.checkUserId,
	userController.getUserLibrary
);
router.delete(
	"/library",
	middlewares.verifyToken,
	userController.deleteBookFromUserLibrary
);

router.post("/list",
	middlewares.verifyToken,
	middlewares.validationCheck,
	userController.createUserList
);

export default router;