import mongoose, { Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

authorSchema.plugin(mongoosePaginate);
const Author = mongoose.model("author", authorSchema);

export default Author;
