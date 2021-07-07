const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');
const mongoose = require('mongoose')

router.post('/', (req, res) => {
	const newIngredients = new Ingredient({
		name: req.body.name,
		amount: req.body.amount
	});

	newIngredients.findOneAndUpdate(
		{ __id: req.body.id },
		{ $push:  newIngredient },
		(error, success) => {
			if(error) return res.json({ message: err });
			
			res.json(success);
		}
	)
});

module.exports = router;