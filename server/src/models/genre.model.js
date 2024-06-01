import mongoose, { Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const genreSchema = new mongoose.Schema({
  genre: { type: String, required: true },
});

genreSchema.plugin(mongoosePaginate);
const Genre = mongoose.model("genres", genreSchema);

export default Genre;