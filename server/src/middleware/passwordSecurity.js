const passwordSecurity = (req, res, next) => {
	const { password } = req.body
	if (password && password.length >= 8 && password.match(/\d+/g) != null) {
		// Para crear una contraseña segura se necesita un minimo de 8 caracteres y por lo menos un numero
		return next()
	} else {
		return res.status(400).json({
			success: false,
			message: "password is not secure"
		})
	}
}

export default passwordSecurity