angular.module('angularMovies')
.config(function($routeProvider){
	$routeProvider
	.when('popular',{
		templateUrl : 'js/routes/popular/template.html',
		controller : 'popular/controller'
	})
})