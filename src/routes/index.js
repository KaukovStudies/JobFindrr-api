const router = require('express').Router()

const companies = require('./companies')
const countries = require('./countries')
const users = require('./users')
const skills = require('./skills')
const main = require('./main')

router.use('/companies', companies)
router.use('/countries', countries)
router.use('/users', users)
router.use('/skills', skills)

// Main routes
router.use(main)

module.exports = router
