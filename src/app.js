const express = require('express')
const { json: bpJson, urlencoded: bpUrlEncoded, raw: bpRaw } = require('body-parser')

const routes = require('./routes')
const { getFilePath } = require('./utils')

const port = process.env.PORT || 3000

const app = express()

app.use(bpJson())
app.use(bpUrlEncoded({ extended: false }))
app.use(bpRaw())

// Serve static files from a specific directory
app.use(express.static(getFilePath('static')))

app.use(routes)

app.listen(port)
