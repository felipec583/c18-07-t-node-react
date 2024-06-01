import express from "express";
import userController from "../controllers/user.controller.js";
import middlewares from "../middleware/index.js";

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

router.put(
  "/library/book",
  middlewares.verifyToken,
  userController.updateBookStatus
);

// 'List' endpoints
router.post(
  "/list",
  middlewares.verifyToken,
  middlewares.validationCheck,
  userController.createUserList
);
router.post(
  "/list/:listId/:bookId",
  middlewares.verifyToken,
  userController.addBookToUserList
);
router.delete(
  "/list/:listId",
  middlewares.verifyToken,
  userController.deleteUserListFromListId
); // borrar una lista completa
router.delete(
  "/list/:listId/:bookId",
  middlewares.verifyToken,
  userController.deleteBookFromListId
); // borrar un libro de una lista
router.patch(
  "/list/:listId/:newName",
  middlewares.verifyToken,
  userController.changeListNameFromListId
); // Cambiar el nombre de una lista
router.get("/list/:userId", userController.getUserList);

export default router;
