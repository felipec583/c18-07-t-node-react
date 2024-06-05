import express from "express";
import searchController from "../controllers/search.controller.js";

const router = express.Router();

router.get("/", searchController.search)
router.get("/author", searchController.getBooksFromAuthorId) // /api/search/author/:id
router.get("/genre", searchController.getBooksFromGenreId) // /api/search/genre/:id

export default router