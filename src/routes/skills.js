const router = require('express').Router()

const { Skill } = require('../models')

router.get('/:id', (req, res) => Skill.findByPk(req.params.id)
	.then(country => res.json(country))
	.catch(err => console.error(err)))

router.get('/', (_req, res) => Skill.findAll()
	.then(countries => res.json(countries))
	.catch(err => console.error(err)))

module.exports = router
