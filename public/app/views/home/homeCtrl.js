// INITILIZE CONTROLLER
// ============================================================
angular.module("rmaes").controller("homeCtrl", function($scope,pokeService) {
  // VARIABLES
  // ============================================================
  $scope.ctrl = "home";
  $scope.pokemonName = 'pokemon';
  $scope.pokemon = null;

  // FUNCTIONS
  // ============================================================
    $scope.getPokemon = function (pokemon) {
        pokeService.getPokemon(pokemon).then(function (response) {
            if (!response.data) {
                console.log("error, no response data")
            } else {
              $scope.pokemonName = response.data.name;
              $scope.pokemon = response.data
                console.log(response.data);
            }

        })
    };




});
