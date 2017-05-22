angular.module("rmaes").service("pokeService", function ($http) {

    //GET Requests//

    this.getPokemon = function (pokemon) {
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon
        })
    };




});