import express from "express";
import middlewares from "../middleware/index.js";
import reviewController from "../controllers/review.controller.js";
const router = express.Router();

router.post(
  "/review",
  middlewares.checkUserId,
  reviewController.addUserReviewToBook
);

router.put("/review", middlewares.checkUserId, reviewController.updateReview);

router.get(
  "/review/user/:id",
  middlewares.checkUserId,
  reviewController.getUserReviews
);

router.get("/review/book/:id", reviewController.getBookReviews);

export default router;
