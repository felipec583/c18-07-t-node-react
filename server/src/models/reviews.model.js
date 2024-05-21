import mongoose, { Types } from "mongoose"

const ReviewSchema = new mongoose.Schema({
	user: { type: Types.ObjectId, required: true },
	text: { type: String, required: true },
	score: { type: Number, required: true }, // score del 1 al 5
	date: { type: Date, required: true, },
	likes: [{
		user: { type: Types.ObjectId },
	}]
})

const Reviews = mongoose.model("reviews", ReviewSchema)

export default Reviews