const express = require('express')
const { json: bpJson, urlencoded: bpUrlEncoded, raw: bpRaw } = require('body-parser')

const app = express()

app.use(bpJson())
app.use(bpUrlEncoded({ extended: false }))
app.use(bpRaw())

app.get('/', (_req, res) => {
	res.send({
		route: '/',
		message: 'JobFindrr API',
		version: '0.0.1-alpha',
	})
})

app.use('*', (_req, res) => {
	res.status(404).send({
		type: 'Error',
		code: 404,
		message: 'Error 404 - Route not found',
	})
})

app.listen(process.env.PORT || 3000)
