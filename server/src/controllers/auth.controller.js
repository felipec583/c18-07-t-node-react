import jwt from "jsonwebtoken"
import { compareSync } from "bcrypt"
import db from "../models/index.js"
import { JWT_SECRET } from "../config/constants.js"

const registerUser = async (req, res, next) => {
  try {
    // recordar que la contraseña llega cifrada a este punto
    let { email, password, username } = req.body

    email = email.toLowerCase()
    username = username.toLowerCase()

    const emailExist = await db.User.findOne({ email: email })
    console.log(emailExist)
    if (emailExist) {
      return res.status(400).json({
        sucess: false,
        message: "email already in use"
      })
    }

    const usernameExist = await db.User.findOne({ username: username })
    if (usernameExist) {
      return res.status(400).json({
        sucess: false,
        message: "username already in use"
      })
    }

    const newUser = await db.User.create({ email, password, username, })

    return res.status(201).json({
      success: true,
      message: "user created",
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const loginUser = async (req, res, next) => {
  try {
    let { username, password } = req.body
    username = username.toLowerCase()

    const userdb = await db.User.findOne({ username })
    if (!userdb) {
      return res.status(404).json({
        success: false,
        message: "invalid username or password"
      })
    }


    const correctpw = compareSync(password, userdb.password)

    if (correctpw) {

      const token = jwt.sign(
        { email: userdb.email, username: userdb.username, createdAt: Date.now() },
        JWT_SECRET,
        { expiresIn: "5d" }
      )

      return res.status(200).json({
        success: true,
        token,
      })
    } else {
      return res.status(401).json({
        success: false,
        message: "invalid username or password"
      })
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }


}

const authController = {
  registerUser,
  loginUser
}

export default authController