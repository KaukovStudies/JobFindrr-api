const express = require('express')
const { json: bpJson, urlencoded: bpUrlEncoded, raw: bpRaw } = require('body-parser')

const app = express()

app.use(bpJson())
app.use(bpUrlEncoded({ extended: false }))
app.use(bpRaw())

app.use((_req, res) => {
	res.send({
		route: '/',
		message: 'JobFindrr API',
		version: '0.0.1-alpha',
	})
})

app.listen(process.env.PORT || 3000)
