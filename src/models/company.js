const { db, dataTypes } = require('../utils')
const User = require('./user')

const Company = db.define('company', {
	name: dataTypes.STRING,
	description: dataTypes.TEXT,
	address: dataTypes.STRING,
}, {})

module.exports = Company
