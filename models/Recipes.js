var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
  title: String,
  category: String,
  ingredients: String,
  instructions: String,
});

mongoose.model('Recipe', RecipeSchema);
