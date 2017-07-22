angular.module('angularMovies')
  .controller('searchController', function($scope, $rootScope) {

    $scope.getQuery = function() {
      var query = $scope.film
      console.log(query)
      query = 'spiderman'
      $rootScope.$broadcast('queryReady', { query: query })
    }
  })