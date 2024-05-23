import { connect } from "mongoose";
import { MONGO_URI } from "./constants.js";

const connectDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log("Database funcionando");
  } catch (error) {
    console.log("Error al cargar database:");
    console.log(error);
  }
};

export default connectDB;
