import express from "express";
import bookController from "../controllers/book.controller.js";
const router = express.Router();

router.post("/book", bookController.createBook);
router.post("/author", bookController.addNewAuthor);
router.post("/genre", bookController.addNewGenre);
router.get("/books", bookController.getAllBooks);

export default router;
