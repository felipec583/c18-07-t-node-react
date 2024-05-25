import express from "express";
import middlewares from "../middleware/index.js";
import reviewController from "../controllers/review.controller.js";
const router = express.Router();

router.post("/", middlewares.checkUserId, reviewController.addUserReviewToBook);
router.post("/like", middlewares.checkUserId, reviewController.addLikeToReview);
router.put("/", middlewares.checkUserId, reviewController.updateReview);
router.delete("/", middlewares.checkUserId, reviewController.deleteUserReview);

router.get(
  "/user/:id",
  middlewares.checkUserId,
  reviewController.getUserReviews
);

router.get("/book/:id", reviewController.getBookReviews);

export default router;
