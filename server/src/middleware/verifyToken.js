import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/constants.js"

const verifyToken = (req, res, next) => {
  const authorization = req.header("Authorization")
  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: "unable to auth",
    })
  }

  if (authorization.startsWith("Bearer") == false) {
    return res.status(401).json({
      success: false,
      message: "authorization token should start with Bearer"
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

    req.credentials = { ...credentials, token }

    return next()
  })

}

export default verifyToken