const { db, dataTypes } = require('../utils')

const Skill = db.define('skill', {
	name: dataTypes.STRING,
	maxPoints: dataTypes.TINYINT,
}, {
	timestamps: false
})

module.exports = Skill
