var app = angular.module('vino');

app.service('loggedInService', function($http, $q) {
	this.logMeOut = function() {
		var dfd = $q.defer();
		console.log('logout almost resolved');
		$http({
			method: 'GET',
			url: '/api/logout'
		}).then(function(response) {
			console.log('logout promise resolved');
			dfd.resolve(response.data);
		})
		return dfd.promise;
	}
})