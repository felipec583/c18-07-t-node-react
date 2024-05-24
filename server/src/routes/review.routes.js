import express from "express";
import middlewares from "../middleware/index.js";
import reviewController from "../controllers/review.controller.js";
const router = express.Router();

router.post(
  "/review",
  middlewares.checkUserId,
  reviewController.addUserReviewToBook
);

export default router;
