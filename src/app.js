// .env configuration import
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.APP_PORT || 3000

const app = express()

// body-parser imports
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port)
