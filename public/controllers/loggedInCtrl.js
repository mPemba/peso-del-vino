var app = angular.module('vino');

app.controller('loggedInCtrl', function($scope, $location, loggedInService, authService, USER_ROLES) {
	// $scope.profile = app;

	//define, and initialize current user on scope
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = authService.isAuthorized;

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.logout = function() {
		loggedInService.logMeOut().then(function() {
			$location.path('/auth')
		})
		.catch(function(err) {
			console.log('error in the logged in ctrl', err);
		})
	}
})