const router = require('express').Router()

const { Company } = require('../models')

router.get('/:id', (req, res) => Company.findByPk(req.params.id)
	.then(company => res.json(company))
	.catch(err => console.error(err)))

router.get('/', (_req, res) => Company.findAll()
	.then(companies => res.json(companies))
	.catch(err => console.error(err)))

module.exports = router
