var app = angular.module('vino', ["ngRoute", "ngAnimate"]);

// app.constant('AUTH_EVENTS', {
// 	loginSuccess: 'auth-login-success',
// 	loginFailed: 'auth-login-failed',
// 	logoutSuccess: 'auth-logout-success',
// 	sessionTimeout: 'auth-session-timeout',
// 	notAuthenticated: 'auth-not-authenticated',
// 	notAuthorized: 'auth-not-authorized'
// })
// app.constant('USER_ROLES', {
// 	all: '*',
// 	admin: 'admin',
// 	guest: 'guest'
// })

app.config(function($routeProvider) {
	$routeProvider
	.when('/auth', {
		templateUrl: '/tmpls/auth.html',
		controller: 'authCtrl'
		// resolve: {
		// 	user: function(authService){
		// 		return authService.getUser();
		// 	}
		// }
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
// .run(function($rootScope, AUTH_EVENTS, authService) {
// 	$rootScope.on('$stateChangeStart', function(event, next) {
// 		var authorizedRoles = next.data.authorizedRoles;
// 		if (!authService.isAuthorized(authorizedRoles)) {
// 			event.preventDefault();
// 			//user not allowed
// 			$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
// 		} else {
// 			$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
// 		}
// 	})
// })
