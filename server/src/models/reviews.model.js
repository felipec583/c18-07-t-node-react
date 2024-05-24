import mongoose, { Types } from "mongoose";

const ReviewSchema = new mongoose.Schema({
  bookId: { type: Types.ObjectId, required: true },
  userId: { type: Types.ObjectId, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // score del 1 al 5
  date: { type: Date, required: true, default: Date.now },
  likes: [
    {
      userId: { type: Types.ObjectId },
    },
  ],
  comments: [
    {
      commentId: { type: Types.ObjectId, ref: "comments" },
    },
  ],
});

const Review = mongoose.model("reviews", ReviewSchema);

export default Review;
