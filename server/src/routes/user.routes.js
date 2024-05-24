import express from "express";
import userController from "../controllers/user.controller.js";
import middlewares from "../middleware/index.js";
const router = express.Router();

router.post("/", middlewares.verifyToken, userController.addBookToUserLibrary);
router.get("/", middlewares.verifyToken, userController.getUserLibrary);
router.delete("/", middlewares.verifyToken, userController.deleteBookFromUserLibrary);

export default router;
