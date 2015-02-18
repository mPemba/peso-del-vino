var app = angular.module('vino', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'tmpls/home.html',
		controller: 'mainCtrl'
	})
	.when('/beef', {
		templateUrl: 'tmpls/beef.html',
		controller: 'beefCtrl'
	})
	.when('/pork', {
		templateUrl: 'tmpls/pork.html',
		controller: 'mainCtrl'
	})
	.when('/lamb', {
		templateUrl: 'tmpls/lamb.html',
		controller: 'mainCtrl'
	})
	.when('/poultry', {
		templateUrl: 'tmpls/poultry.html',
		controller: 'mainCtrl'
	})
	.when('/fish', {
		templateUrl: 'tmpls/fish.html',
		controller: 'mainCtrl'
	})
	.when('/crustaceans', {
		templateUrl: 'tmpls/crustaceans.html',
		controller: 'mainCtrl'
	})
	.when('/pasta', {
		templateUrl: 'tmpls/pasta.html',
		controller: 'mainCtrl'
	})
	.when('/veggies', {
		templateUrl: 'tmpls/veggies.html',
		controller: 'mainCtrl'
	})
	.when('/cheese', {
		templateUrl: 'tmpls/cheese.html',
		controller: 'mainCtrl'
	})
	.when('/dessert', {
		templateUrl: 'tmpls/dessert.html',
		controller: 'mainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})
