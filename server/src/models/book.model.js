import mongoose, { Types } from "mongoose";

const BookSchema = new mongoose.Schema({
  publishDate: { type: Date, required: true },
  author: { type: Types.ObjectId, required: true, ref: "author" },
  genres: [
    {
      genre: { type: String, required: true, ref: "genres" },
    },
  ],
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Book = mongoose.model("books", BookSchema);

export default Book;
