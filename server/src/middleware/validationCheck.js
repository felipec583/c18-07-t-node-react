import { validationResult } from "express-validator"

const validationCheck = (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			response: errors.array()
		})
	}
	return next()
}

export default validationCheck