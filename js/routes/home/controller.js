angular.module('angularMovies')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getQuery = function() {
            var query = $scope.film
            console.log(query)
            $rootScope.$broadcast('queryReady', { query: query })
        }

        // $scope.getIdVideo = function () {
        //     var idVideo = $scope.idVideo
        //     console.log(idVideo)
        //     $rootScope.$broadcast('idReady', {idVideo: idVideo})
        // }

        $scope.$on('queryReady', function(e, data) {
            dataService.getFilms(data.query)
                .then(function(response) {
                    console.log(response)
                    $scope.films = response.data.results
                })

        })

        // $scope.$on('idReady', function(e, data) {
        //     dataService.getVideo(data.idVideo)
        //         .then(function(response) {
        //             console.log(response)
        //             $scope.url = response.data.results[0].key
        //         })
        // })

    })