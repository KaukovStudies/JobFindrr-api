const router = require('express').Router()

const main = require('./main')

router.use(main)

// 404 Route
router.use((_req, res) => {
	res.status(404).send({
		type: 'Error',
		code: 404,
		message: 'Error 404 - Route not found',
	})
})

module.exports = router
