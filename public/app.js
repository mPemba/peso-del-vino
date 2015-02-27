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
		// 		return authService.getUser;
		// 	}
		// }
	})
	.when('/home', {
		templateUrl: '/tmpls/home.html',
		controller: 'loggedInCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/beef', {
		templateUrl: 'tmpls/beef.html',
		controller: 'beefCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/pork', {
		templateUrl: 'tmpls/pork.html',
		controller: 'porkCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/lamb', {
		templateUrl: 'tmpls/lamb.html',
		controller: 'lambCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/poultry', {
		templateUrl: 'tmpls/poultry.html',
		controller: 'poultryCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/fish', {
		templateUrl: 'tmpls/fish.html',
		controller: 'fishCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/crustaceans', {
		templateUrl: 'tmpls/crustaceans.html',
		controller: 'crustCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/pasta', {
		templateUrl: 'tmpls/pasta.html',
		controller: 'pastaCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/veggies', {
		templateUrl: 'tmpls/veggies.html',
		controller: 'veggiesCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/cheese', {
		templateUrl: 'tmpls/cheese.html',
		controller: 'cheeseCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
	})
	.when('/dessert', {
		templateUrl: 'tmpls/dessert.html',
		controller: 'dessertCtrl',
		resolve: {
			user: function(authService) {
				return authService.getUser;
			}
		}
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
