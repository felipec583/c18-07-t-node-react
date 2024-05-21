import mongoose, { Types } from "mongoose"

const UserSchema = new mongoose.Schema({
	email: { type: String, index: true, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	//role: { type: String, required: true, enum: ["user", "admin"] },
	//last_connection: { type: Date, default: Date.now, required: true },
	library: [{ // Para guardar libros (seria como un ver mas tarde)
		addedDate: { type: Date, default: Date.now, required: true },
		book: {
			type: Types.ObjectId,
			ref: "books",
			required: true
		},
	}],
	list: [{ // lista de libros a crear por el usuario
		creationDate: { type: Date, default: Date.now, required: true },
		listname: { type: String, required: true },
		booklist: [{
			addedDate: { type: Date, default: Date.now, required: true },
			book: {
				type: Types.ObjectId,
				ref: "books",
				required: true
			},
		}]
	}],

	/* Esto al final no hizo falta.
	reviews: [{

	}],

	comments: [{ // Comentarios (no son las reseñas, serian las respuestas a otras reseñas)
		type: Types.ObjectId,
		ref: "comments",
		required: true
	}]*/
})

const Users = mongoose.model("users", UserSchema)

export default Users