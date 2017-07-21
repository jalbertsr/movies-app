angular.module('angularMovies')
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'js/routes/nowPlaying/template.html',
		controller : 'nowPlayingController'
	})
})