const { db, dataTypes } = require('../utils')
const Country = require('./country')
const User = require('./user')

const UserDetails = db.define('userDetails', {
	age: dataTypes.TINYINT,
	sex: dataTypes.ENUM('m', 'f', 'n'),
	city: dataTypes.STRING,
}, {})

module.exports = UserDetails
