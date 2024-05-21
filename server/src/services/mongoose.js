import { connect } from "mongoose";
import { MONGO_URI } from "../config/constants.js";

connect(MONGO_URI).then(() => {
	console.log("Database funcionando")
})
	.catch(err => {
		console.log("Error al cargar database:")
		console.log(err)
	})