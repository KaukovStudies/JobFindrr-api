const router = require('express').Router()

const { Country } = require('../models')

router.get('/:id', (req, res) => Country.findByPk(req.params.id)
	.then(country => res.json(country))
	.catch(err => console.error(err)))

router.get('/', (_req, res) => Country.findAll()
	.then(countries => res.json(countries))
	.catch(err => console.error(err)))

module.exports = router
