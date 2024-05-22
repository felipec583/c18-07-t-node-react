import express from "express";
import db from "../models/index.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await db.User.create({
      ...user,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
