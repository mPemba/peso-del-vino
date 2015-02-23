var app = angular.module('vino');

app.controller('loggedInCtrl', function($scope, $location, loggedInService, app) {
	$scope.profile = app;
	$scope.logout = function() {
		loggedInService.logMeOut().then(function() {
			$location.path('/#/auth')
		})
		.catch(function(err) {
			console.log('error in the logged in ctrl', err);
		})
	}
})