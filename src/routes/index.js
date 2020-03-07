const path = require('path')

const router = require('express').Router()

const main = require('./main')

router.use(main)

// 404 Route
router.use((_req, res) => {
	res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'))
})

module.exports = router
