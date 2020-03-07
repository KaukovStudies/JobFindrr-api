// .env configuration import
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { getFilePath } = require('./utils')
const routes = require('./routes')

const port = process.env.APP_PORT || 3000

const app = express()

// body-parser imports
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({ extended: false }))

// Static file serving
app.use(express.static(getFilePath('static')))

// Add all routes
app.use(routes)

app.listen(port)
