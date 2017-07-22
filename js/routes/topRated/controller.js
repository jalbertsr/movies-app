angular.module('angularMovies')
    .controller('topRatedController', function($scope, dataService) {
    	
        dataService.getTopRated()
            .then( function(response) {
                console.log(response)
                $scope.films = response.data.results
            })
    })
