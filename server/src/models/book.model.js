import mongoose, { Types } from "mongoose"

const BookSchema = new mongoose.Schema({
	//uploadedby: { type: Types.ObjectId, required: true, ref: "users" },
	publishDate: { type: Date, required: true },
	author: { type: String, required: true },
	title: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
})

const Books = mongoose.model("books", BookSchema)

export default Books