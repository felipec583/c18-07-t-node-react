import "dotenv/config.js";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

let date = new Date();
const CURRENT_DATE = new Date(
  date.getTime() - date.getTimezoneOffset() * 60000
).toISOString();

export { PORT, MONGO_URI, JWT_SECRET, CURRENT_DATE };
