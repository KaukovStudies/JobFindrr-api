const router = require('express').Router()

router.get('/', (_req, res) => res.json({
	message: '(JobFindrr API v0.0.1-alpha) /'
}))

// 404
router.use((_req, res) => res.status(404).json({
	type: 'Error',
	code: 404,
	message: '404 Route Not Found!'
}))

module.exports = router
