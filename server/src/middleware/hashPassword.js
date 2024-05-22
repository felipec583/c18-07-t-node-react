import { hashSync, genSaltSync } from "bcrypt";

const hashPassword = (req, res, next) => {
	const { password } = req.body
	const hashPassword = hashSync(
		password,
		genSaltSync()
	)
	req.body.password = hashPassword
	return next()
}

export default hashPassword