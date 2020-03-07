const path = require('path')

const router = require('express').Router()

router.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'home.html'))
})

module.exports = router
