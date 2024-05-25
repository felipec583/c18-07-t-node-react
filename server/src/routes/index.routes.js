import express from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import bookRouter from "./book.routes.js";
import reviewRouter from "./review.routes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/", bookRouter);
router.use("/review", reviewRouter);

export default router;
