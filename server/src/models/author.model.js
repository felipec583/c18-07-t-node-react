import mongoose, { Types } from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Author = mongoose.model("author", authorSchema);

export default Author;
