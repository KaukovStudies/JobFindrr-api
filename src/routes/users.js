const router = require('express').Router()

const { User } = require('../models')

router.get('/:id', (req, res) => User.findByPk(req.params.id)
	.then(country => res.json(country))
	.catch(err => console.error(err)))

router.get('/', (_req, res) => User.findAll()
	.then(countries => res.json(countries))
	.catch(err => console.error(err)))

module.exports = router
