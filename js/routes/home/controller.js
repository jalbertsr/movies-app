angular.module('angularMovies')
    .controller('homeController', function($scope, dataService) {
    	
        // dataService.getLatest()
        //     .then( function(response) {
        //         console.log(response)
        //         $scope.films = response.data.results
        //     })

        $scope.$on('queryReady', function(e, data){
            dataService.getFilms(data.query)
            .then( function (response) {
                console.log(response)
                $scope.films = response.data.results
            })
        })
    })