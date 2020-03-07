const { db, dataTypes } = require('../utils')
const UserSkill = require('./user-skill')

const Skill = db.define('skill', {
	name: dataTypes.STRING,
	maxPoints: dataTypes.TINYINT,
}, {
	timestamps: false
})

module.exports = Skill
