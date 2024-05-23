import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import "./config/mongoose.js";
import { PORT } from "./config/constants.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/book.routes.js";
import testUserRoute from "./routes/userTestRoute.js";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/", bookRoutes);
app.use("/", userRoute);
app.use("/", authRoute)
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
  });
});
