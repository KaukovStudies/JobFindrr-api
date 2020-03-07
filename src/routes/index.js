const router = require('express').Router()

const main = require('./main')
const { getFilePath } = require('../utils')

router.use(main)

// 404 Route
router.use((_req, res) => {
	res.status(404).sendFile(getFilePath('views', '404.html'))
})

module.exports = router
