const express = require('express')

const app = express()

app.use((_req, res) => {
	res.send({
		route: '/',
		message: 'JobFindrr API',
		version: '0.0.1-alpha',
	})
})

app.listen(process.env.PORT || 3000)
