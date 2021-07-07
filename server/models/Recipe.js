const mongoose = require('mongoose');
const IngredientSchema = require('./Ingredient');
const AuthorSchema = require('./Author');



const RecipeSchema = new mongoose.Schema({
	name: String,
	servings: Number,
	cookTime: String,
	instructions: String,
	ingredients: [IngredientSchema],
	authors: [AuthorSchema]

})

module.exports = mongoose.model('Recipe', RecipeSchema);