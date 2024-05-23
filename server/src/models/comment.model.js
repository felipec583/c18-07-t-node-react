import mongoose, { Types } from "mongoose";

const CommentSchema = new mongoose.Schema({
  reviewId: { type: Types.ObjectId, required: true, ref: "reviews" },
  createdBy: { type: Types.ObjectId, required: true, ref: "users" },
  commentText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("comments", CommentSchema);

export default Comment;
