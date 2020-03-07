const { db, dataTypes } = require('../utils')

const Country = db.define('country', {
	abbreviation: dataTypes.STRING,
	name: dataTypes.STRING,
}, {})

module.exports = Country
