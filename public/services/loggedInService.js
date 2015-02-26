var app = angular.module('vino');

app.service('loggedInService', function($http, $q) {
	// this.logMeOut = function() {
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: '/api/logout'
	// 	}).then(function(response) {
	// 		dfd.resolve(response.data);
	// 	})
	// 	return dfd.promise;
	// }
})