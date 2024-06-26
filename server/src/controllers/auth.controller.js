import jwt from "jsonwebtoken";

import authService from "../services/auth.service.js";

const registerUser = async (req, res, next) => {
  try {
    // recordar que la contraseña llega cifrada a este punto
    const { email, password, username } = req.body;
    const newUser = await authService.registerUser({
      email,
      username,
      password,
    });
    return res.status(201).json({
      success: true,
      message: "user created",
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await authService.loginUser({ username, password });
    return res.status(200).json({
      success: true,
      token: response.token,
      user: response.user,
    });
  } catch (err) {
    next(err);
  }
};

const googleAuth = async (req, res, next) => {
  try {
    const { token } = req.body;
    const response = await authService.googleAuth(token);
    return res.status(200).json({
      success: true,
      token: response.token,
      user: response.user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



const authController = {
  registerUser,
  loginUser,
  googleAuth,
};

export default authController;
