const express = require('express')
const { json: bpJson, urlencoded: bpUrlEncoded, raw: bpRaw } = require('body-parser')

const routes = require('./routes')

const port = process.env.PORT || 3000

const app = express()

app.use(bpJson())
app.use(bpUrlEncoded({ extended: false }))
app.use(bpRaw())

app.use(routes)

app.listen(port)
