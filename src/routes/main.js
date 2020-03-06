const router = require('express').Router()

router.get('/', (_req, res) => {
	res.send({
		route: '/',
		message: 'JobFindrr API',
		version: '0.0.1-alpha',
	})
})

module.exports = router
