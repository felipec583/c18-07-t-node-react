const validateLogin = (req, res, next) => {
	const { password, username } = req.body
	if (!password || !username) {
		return res.status(400).json({
			success: false,
			message: "username and password are required"
		})
	} else {
		return next()
	}
}

export default validateLogin