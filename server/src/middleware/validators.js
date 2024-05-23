import { body } from "express-validator"

const email = () => body("email", "invalid email").exists()
	.isEmail()
	.toLowerCase()

const password = () => body("password").exists()
	.isLength({ min: 8 }).withMessage("Password must contain at least 8 characters")
	.isStrongPassword({ minLength: 8, minNumbers: 3, minUppercase: 0, minLowercase: 0, minSymbols: 0 })
	.withMessage("Please enter a password at least 8 character and contain at least three numbers")
	.matches(/[a-zA-Z]./).withMessage('The password must contain at least one letter')

const username = () => body("username", "invalid username").exists()
	.isLength({ min: 5 }).withMessage("Username must contain at least 5 characters")
	.toLowerCase()

const validators = {
	email,
	password,
	username
}

export default validators