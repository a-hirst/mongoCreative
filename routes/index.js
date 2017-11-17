var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipes', function(req, res, next) {
  Recipe.find(function(err, recipes){
    if(err){ return next(err); }
    res.json(recipes);
  });
});

router.post('/recipes', function(req, res, next) {
  var recipe = new Recipe(req.body);
  recipe.save(function(err, recipe){
    if(err){ return next(err); }
    res.json(recipe);
  });
});

module.exports = router;
