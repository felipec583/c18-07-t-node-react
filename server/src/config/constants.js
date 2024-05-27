import "dotenv/config.js";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

let date = new Date();
const CURRENT_DATE = new Date(
  date.getTime() - date.getTimezoneOffset() * 60000
).toISOString();

export { PORT, MONGO_URI, JWT_SECRET, CURRENT_DATE, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };
