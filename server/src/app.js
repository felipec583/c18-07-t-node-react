import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import "./config/mongoose.js";
import { PORT } from "./config/constants.js";
import mongoose from "mongoose";

import apiRoutes from "./routes/index.routes.js";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
  });
});
