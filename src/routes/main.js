const router = require('express').Router()

const { getFilePath } = require('../utils')

router.get('/', (_req, res) => {
	res.sendFile(getFilePath('views', 'home.html'))
})

module.exports = router
