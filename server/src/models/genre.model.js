import mongoose, { Types } from "mongoose";

const genreSchema = {
  genre: { type: String, required: true },
};

const Genre = mongoose.model("genres", genreSchema);

export default Genre;