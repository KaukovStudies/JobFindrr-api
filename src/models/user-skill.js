const { db, dataTypes } = require('../utils')

const UserSkill = db.define('userSkill', {
	skillPoints: dataTypes.TINYINT,
}, {
	timestamps: false
})

module.exports = UserSkill
