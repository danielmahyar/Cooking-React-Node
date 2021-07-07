const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
	name: String,
	amount: String
})

module.exports = IngredientSchema;