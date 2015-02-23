var app = angular.module('vino', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/auth', {
		templateUrl: '/tmpls/auth.html',
		controller: 'authCtrl'
	})
	.when('/home', {
		templateUrl: '/tmpls/home.html',
		controller: 'loggedInCtrl'
	})
	.when('/beef', {
		templateUrl: 'tmpls/beef.html',
		controller: 'beefCtrl'
	})
	.when('/pork', {
		templateUrl: 'tmpls/pork.html',
		controller: 'porkCtrl'
	})
	.when('/lamb', {
		templateUrl: 'tmpls/lamb.html',
		controller: 'lambCtrl'
	})
	.when('/poultry', {
		templateUrl: 'tmpls/poultry.html',
		controller: 'poultryCtrl'
	})
	.when('/fish', {
		templateUrl: 'tmpls/fish.html',
		controller: 'fishCtrl'
	})
	.when('/crustaceans', {
		templateUrl: 'tmpls/crustaceans.html',
		controller: 'crustCtrl'
	})
	.when('/pasta', {
		templateUrl: 'tmpls/pasta.html',
		controller: 'pastaCtrl'
	})
	.when('/veggies', {
		templateUrl: 'tmpls/veggies.html',
		controller: 'veggiesCtrl'
	})
	.when('/cheese', {
		templateUrl: 'tmpls/cheese.html',
		controller: 'cheeseCtrl'
	})
	.when('/dessert', {
		templateUrl: 'tmpls/dessert.html',
		controller: 'dessertCtrl'
	})
	.otherwise({
		redirectTo: '/auth'
	})
})
