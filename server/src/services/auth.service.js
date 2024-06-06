import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import CustomError from "../helpers/customError.js";
import db from "../models/index.js";
import GoogleClient from "../config/googleAuth.js";
import { GOOGLE_CLIENT_ID, JWT_SECRET } from "../config/constants.js";

const registerUser = async ({ email, username, password }) => {
  const emailExist = await db.User.findOne({ email: email });
  if (emailExist) throw new CustomError(400, "El email ya está en uso");

  const usernameExist = await db.User.findOne({ username: username });
  if (usernameExist)
    throw new CustomError(400, "El nombre de usuario ya está en uso");

  const newUser = await db.User.create({ email, password, username });
  return newUser;
};

const loginUser = async ({ username, password }) => {
  const userdb = await db.User.findOne({ username });
  if (!userdb)
    throw new CustomError(400, "Nombre de usuario o contraseña invalida");

  const correctpw = compareSync(password, userdb.password);
  if (!correctpw)
    throw new CustomError(400, "Nombre de usuario o contraseña invalida");

  const jwtToken = jwt.sign(
    {
      email: userdb.email,
      username: userdb.username,
      createdAt: Date.now(),
      id: userdb.id,
    },
    JWT_SECRET,
    { expiresIn: "5d" }
  );

  return {
    token: jwtToken,
    user: {
      username: userdb.username,
      email: userdb.email,
      id: userdb.id,
      description: userdb.description,
      profilePicture: userdb.profilePic,
      type: userdb.accountType
    },
  };
};

const googleAuth = async (token) => {
  const userinfo = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  ).then((res) => res.json());

  const { sub, email, name } = userinfo;

  let userdb = await db.User.findOne({ email });
  if (!userdb)
    userdb = await db.User.create({
      email,
      username: email.split("@")[0],
      password: sub,
      accountType: "google",
    });

  const jwtToken = jwt.sign(
    {
      email: userdb.email,
      username: userdb.username,
      createdAt: Date.now(),
      id: userdb.id,
    },
    JWT_SECRET,
    { expiresIn: "5d" }
  );

  return {
    token: jwtToken,
    user: { username: userdb.username, email: userdb.email, id: userdb.id },
  };
};


const authService = {
  registerUser,
  loginUser,
  googleAuth,
};

export default authService;
