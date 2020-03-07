const { db, dataTypes } = require('../utils')

const Company = db.define('company', {
	id: {
		type: dataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: dataTypes.STRING,
	description: dataTypes.TEXT,
	address: {
		type: dataTypes.STRING,
		allowNull: false,
	},
	'owner_user_id': {
		type: dataTypes.INTEGER,
		references: 'users',
		referencesKey: 'id'
	}
}, {
	timestamps: false
})

module.exports = Company
