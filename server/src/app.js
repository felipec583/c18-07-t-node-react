import express from "express";
import cors from "cors";

import "./config/mongoose.js";
import { PORT } from "./config/constants.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
