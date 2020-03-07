const { db, dataTypes } = require('../utils')

const User = db.define('user', {
	username: dataTypes.STRING,
	password: dataTypes.STRING,
	firstName: dataTypes.STRING,
	lastName: dataTypes.STRING,
}, {})

module.exports = User
