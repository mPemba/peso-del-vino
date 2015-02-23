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
			console.log('error in the registration service');
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
})