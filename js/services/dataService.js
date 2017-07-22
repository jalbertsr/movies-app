angular.module('angularMovies')
    .factory('dataService', function ($http) {  	
        var apiKey = '547295c808eda562d9c60feff974e104'

        function getNowPlaying () {
          var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey
          return $http.get(url)
        }

        function getPopular () {
          var url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey
          return $http.get(url)
        }

        function getTopRated () {
          var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey
          return $http.get(url)
        }

        function getUpcoming () {
          var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey
          return $http.get(url)
        }

        function getLatest () {
          var url = 'https://api.themoviedb.org/3/movie/latest?api_key=' + apiKey
          return $http.get(url)
        }

        function getFilms (query) {
          console.log(query)
          var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey +'&query='+ query
          return $http.get(url)
        }

        return {
          getPopular: getPopular,
          getNowPlaying: getNowPlaying,
          getTopRated: getTopRated,
          getUpcoming: getUpcoming,
          getLatest: getLatest,
          getFilms: getFilms
        }
    })