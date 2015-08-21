var app = angular.module('vino');

app.service('authService', function($http, $q, $rootScope, $location) {

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
	};

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
	};

	this.logMeOut = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/logout'
		}).then(function(response) {
			dfd.resolve(response.data);
		})
		return dfd.promise;
	};

	this.getUser = function() {
		var dfd = $q.defer();
		$http.get('/api/me')
		.then(function(data){
			user = data.data
			dfd.resolve(user)
		}, function(err){
			$location.path('/auth');
		})
		return dfd.promise;
	};

});
