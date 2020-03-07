const { db, dataTypes } = require('../utils')

const UserDetails = db.define('userDetails', {
	age: dataTypes.TINYINT,
	sex: dataTypes.ENUM('m', 'f', 'n'),
	city: dataTypes.STRING,
}, {})

module.exports = UserDetails
