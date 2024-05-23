const validateRegister = (req, res, next) => {
	const { email, password, username } = req.body
	if (!email || !password || !username) {
		return res.status(400).json({
			success: false,
			message: "email, password and username are required "
		})
	} else {
		return next()
	}
}

export default validateRegister