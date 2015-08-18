var app = angular.module('vino');

app.controller('loggedInCtrl', function($scope, $rootScope, $location, loggedInService, authService) {

	var getUser = function() {
		authService.getUser().then(function(res){
			console.log(res)
			$rootScope.user = res;
		}, function(err) {
			console.log(err)
		});
	}

	getUser();

	$scope.logout = function() {
		authService.logMeOut().then(function(res) {
			getUser();
			$rootScope.user = false;
			$location.path('/auth')
		})
		.catch(function(err) {
			console.log('error in the logged in ctrl', err);
		})
	}
});
