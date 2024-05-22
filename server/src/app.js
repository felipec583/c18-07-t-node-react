import express from "express";
import cors from "cors";

import "./services/mongoose.js";
import { PORT } from "./config/constants.js";

import Users from "./models/user.model.js";
import Books from "./models/book.model.js";
import { Types, mongo } from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
