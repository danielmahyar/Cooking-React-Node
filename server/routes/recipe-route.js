const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const ingredientRouter = require('./ingredient-route');


//Gets all posts from DB
router.get('/', async (req, res) => {
	try{
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (err) {
		res.json({ message: err });
	}
});

//Add recipe to DB
router.post('/newrecipe', (req, res) => {
	const newRecipe = new Recipe({
		name: req.body.name,
		servings: req.body.servings,
		cookTime: req.body.cookTime,
		instructions: req.body.instructions,
		ingredients: req.body.ingredients,
		authors: req.body.authors
	});

	newRecipe.save().then(newRecipeInfo => {
		res.json(newRecipeInfo);
	}).catch(err => {
		res.json({ message: err });
	})
		
})

router.delete('/:id', async (req, res) => {
	try{
		const selectRecipeAndDelete = await Recipe.findByIdAndDelete(req.params.id);
		res.json(selectRecipeAndDelete);
	} catch (err) {
		res.json({ message: err });

	}
})

router.put('/:id', async (req, res) => {
	try{
		const selectRecipeAndUpdate = await Recipe
		.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			servings: req.body.servings,
			cookTime: req.body.cookTime,
			instructions: req.body.instructions,
			ingredients: req.body.ingredients,
			authors: req.body.authors
		}, { new: true});

		res.json(selectRecipeAndUpdate);
	} catch (err) {
		res.json({ message: err });
	}
});



module.exports = router;