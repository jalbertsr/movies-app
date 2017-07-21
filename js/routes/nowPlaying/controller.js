angular.module('angularMovies')
    .controller('nowPlayingController', function($scope, dataService) {
    	
        dataService.getFilms()
            .then( function(response) {
                console.log(response)
            })
    })