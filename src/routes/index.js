const router = require('express').Router()

router.use('/companies', require('./companies'))
router.use('/countries', require('./countries'))
router.use('/users', require('./users'))
router.use('/skills', require('./skills'))
router.use(require('./main'))

module.exports = router
