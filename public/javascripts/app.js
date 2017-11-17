angular.module('recipe', [])
.controller('RecipeCtrl', [
  '$scope', '$http',
  function($scope, $http) {
    $scope.addRecipe = function() {
      $scope.create({
        title: $scope.formTitle,
        category: $scope.formCategory,
        ingredients: $scope.formIngredients,
        instructions: $scope.formInstructions
      });
      $scope.formTitle = '';
      $scope.formCategory = '';
      $scope.formIngredients = '';
      $scope.formInstructions = '';
    };

    $scope.create = function(recipe) {
      return $http.post('/recipes', recipe).success(function(data){
        $scope.recipes.push(data);
      });
    };
     $scope.getAll = function() {
      console.log('getAll');
      return $http.get('/recipes').success(function(data){
        console.log('recipes: ' + data);
        angular.copy(data, $scope.recipes);
        $scope.recipes = data;
      });
    };
    $scope.getAll();
  }
]);
