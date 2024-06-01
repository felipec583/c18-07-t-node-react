import express from "express";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import "./config/mongoose.js";
import { PORT } from "./config/constants.js";
import mongoose from "mongoose";
import morgan from "morgan";
import apiRoutes from "./routes/index.routes.js";
import morganConfig from "./config/logger.js";
import middlewares from "./middleware/index.js";
import swaggerDoc from "./config/swagger.js";

const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(morgan(morganConfig));

app.use("/api", apiRoutes);
swaggerDoc(app, PORT);
app.use("*", middlewares.notFoundHandler);
app.use(middlewares.errorHandler);

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
  });
});
