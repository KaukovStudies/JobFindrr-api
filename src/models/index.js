const Company = require('./company')
const Country = require('./country')
const User = require('./user')
const UserDetails = require('./user-details')
const UserSkill = require('./user-skill')
const Skill = require('./skill')

// Model relationships //
// UserSkill - userId, skillId
User.hasMany(UserSkill)
Skill.hasMany(UserSkill)

// UserDetails - userId, countryId
UserDetails.belongsTo(User)
UserDetails.belongsTo(Country)

// Company - ownerId
Company.belongsTo(User, { as: 'owner' })

Company.belongsToMany(User, { through: 'employees' })
User.belongsToMany(Company, { through: 'employees' })

module.exports = {
	Company,
	Country,
	Skill,
	User,
	UserDetails,
	UserSkill,
}
