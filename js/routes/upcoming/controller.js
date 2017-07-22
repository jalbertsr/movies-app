angular.module('angularMovies')
    .controller('upcomingController', function($scope, dataService) {
    	
        dataService.getUpcoming()
            .then( function(response) {
                console.log(response)
                $scope.films = response.data.results
            })
    })
