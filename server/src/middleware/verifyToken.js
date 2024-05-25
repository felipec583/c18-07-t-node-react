import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/constants.js"
import db from "../models/index.js"

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: "unable to auth",
    })
  }

  const token = authorization.split(" ")[1]

  jwt.verify(token, JWT_SECRET, async (err, credentials) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "unauthorized"
      })
    }

    req.credentials = credentials

    return next()
  })

}

export default verifyToken