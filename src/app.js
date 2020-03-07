// .env configuration import
require('dotenv').config()

// Require models so Sequelize knows about them and creates the needed tables with sync()
require('./models')

const express = require('express')
const bodyParser = require('body-parser')

const { getFilePath, db } = require('./utils')
const routes = require('./routes')

const port = process.env.APP_PORT || 3000
const force = false

const app = express()

// body-parser imports
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded({ extended: false }))

// Static file serving
app.use(express.static(getFilePath('static')))

// Add all routes
app.use(routes)

db.sync({ force }) // TODO: Remove sync() and use migrations!
	.then(() => {
		app.listen(port)

		console.log(`\nApp launched on http://${process.env.APP_HOST || 'localhost'}:${port}\n`)
	})
	.catch(err => console.error(err))
