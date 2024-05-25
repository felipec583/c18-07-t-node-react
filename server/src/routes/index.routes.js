import express from "express"
import authRouter from "./auth.routes.js"
import userRouter from "./user.routes.js"
import bookRouter from "./book.routes.js"

const router = express.Router();

router.use("/auth", authRouter)
router.use("/user", userRouter)
router.use("/book", bookRouter)

export default router