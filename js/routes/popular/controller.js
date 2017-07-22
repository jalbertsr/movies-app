angular.module('angularMovies')
    .controller('popularController', function($scope, dataService) {
    	
        dataService.getPopular()
            .then( function(response) {
                console.log(response)
                $scope.films = response.data.results
            })
    })
