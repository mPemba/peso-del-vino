var app = angular.module('vino');

app.service('authService', function($http, $q) {

	this.register = function(email, password) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register',
			data: {
				email: email,
				password: password
			}
		})
		.then(function(response) {
			console.log('register service here');
			dfd.resolve(response.data);
		})
		.catch(function(err) {
			console.log('error: authservice');
			dfd.reject(err);
		})
		return dfd.promise;
	}
	this.getProfile = function() {
		var dfd = $q.defer();
		console.log('almost resolved');
		$http({
			method: 'GET',
			url: '/api/profile'
		}).then(function(response) {
			console.log('profile promise resolved');
			dfd.resolve(response.data);
		})
		return dfd.promise;
	}

	this.login = function(email, password) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: {
				email: email,
				password: password
			}
		}).then(function(response) {
			dfd.resolve(response.data);
		}).catch(function(err) {
			console.log("error logging in");
			dfd.reject(err);
		})
		return dfd.promise;
	}

	// this.login = function(credentials) {
	// 	return $http
	// 	.post('/login', credentials)
	// 	.then(function(res) {
	// 		Session.create(res.data.id, res.data.user.id, res.data.user.role);
	// 		return res.data.user;
	// 	})
	// }

	// this.isAuthenticated = function() {
	// 	return !!Session.userId;
	// }

	// this.isAuthorized = function(authorizedRoles) {
	// 	if (!angular.isArray(authorizedRoles)) {
	// 		authorizedRoles = [authorizedRoles];
	// 	}
	// 	return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
	// };
	// return authService;

 //    this.create = function(sessionId, userId, userRole) {
 //    	this.id = sessionId;
 //    	this.userId = userId;
 //    	this.userRole = userRole;
 //    }

 //    this.destroy = function() {
 //    	this.id = null;
 //    	this.userId = null;
 //    	this.userRole = null;
 //    }
 //    return this;


})