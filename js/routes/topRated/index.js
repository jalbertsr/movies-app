angular.module('angularMovies')
.config(function($routeProvider){
	$routeProvider
	.when('topRated',{
		templateUrl : 'js/routes/topRated/template.html',
		controller : 'topRated/controller'
	})
})