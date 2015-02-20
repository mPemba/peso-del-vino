var app = angular.module('vino');

app.service('profileService', function($q, $http) {
	this.getProfile = function() {
		var dfd = $q.defer;
		$http({
			method: 'GET',
			url: '/api/profile'
		}).then(function(response) {
			dfd.resolve(response.data);
		})
		return dfd.response;
	}
})