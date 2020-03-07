// Return the pool promise so we can start executing queries right away
module.exports = require('mysql2').createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASS || '',
	database: process.env.DB_NAME || '',
}).promise()
