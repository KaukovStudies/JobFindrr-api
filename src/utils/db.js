const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
	host: process.env.DB_HOST || 'localhost',
	username: process.env.DB_USER || 'root',
	password: process.env.DB_PASS || '',
	database: process.env.DB_NAME || '',
	dialect: process.env.DB_DRIVER || 'mysql',
})

module.exports = {
	db,
	dataTypes: DataTypes
}
