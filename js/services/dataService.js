angular.module('angularMovies')
	.factory('dataService', function($http){
		function getFilms(){
			//var apiKey = '547295c808eda562d9c60feff974e104'
			console.log('estoy en la llmada')
			var url = 'https://api.themoviedb.org/3/movie/popular?api_key=547295c808eda562d9c60feff974e104&language=en-US&page=1'
			return $http.get(url)
		}

		return{
			getFilms : getFilms
		}
	})