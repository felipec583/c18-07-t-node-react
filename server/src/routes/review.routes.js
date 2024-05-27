import express from "express";
import middlewares from "../middleware/index.js";
import reviewController from "../controllers/review.controller.js";
const router = express.Router();

router.post("/", middlewares.verifyToken, reviewController.addUserReviewToBook);
router.put("/", middlewares.verifyToken, reviewController.updateReview);
router.delete("/", middlewares.verifyToken, reviewController.deleteUserReview);
router.get(
  "/user/:id",
  middlewares.checkUserId,
  reviewController.getUserReviews
);
router.get("/book/:id", reviewController.getBookReviews);
//LIKES
router.post("/like", middlewares.verifyToken, reviewController.addLikeToReview);
router.delete(
  "/like",
  middlewares.verifyToken,
  reviewController.deleteLikeFromReview
);
//COMMENTS
router.post(
  "/comment",
  middlewares.verifyToken,
  reviewController.addCommentToReview
);
router.put("/comment", middlewares.verifyToken, reviewController.updateComment);

router.delete(
  "/comment",
  middlewares.verifyToken,
  reviewController.deleteComment
);

router.get(
  "/comment/user/:id",
  middlewares.checkUserId,
  reviewController.getUserReviewsComments
);

export default router;
