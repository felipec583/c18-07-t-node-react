import express from "express";
import cors from "cors";
import path from "path";

import { __dirname } from "./config/path.js";
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
//app.use(express.static(path.join(__dirname, "public", "dist"))) // De ser necesario añadir el frontend aqui.

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
    console.log(`Host: http://localhost:${PORT}/`)
  });
});
