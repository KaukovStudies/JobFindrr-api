const { db, dataTypes } = require('../utils')
const UserSkill = require('./user-skill')
const Company = require('./company')

const User = db.define('user', {
	username: dataTypes.STRING,
	password: dataTypes.STRING,
	firstName: dataTypes.STRING,
	lastName: dataTypes.STRING,
}, {})

module.exports = User
