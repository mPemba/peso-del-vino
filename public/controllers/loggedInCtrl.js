var app = angular.module('vino');

app.controller('loggedInCtrl', function($scope, $rootScope, $location, loggedInService, authService) {


	var getUser = function() {
		authService.getUser().then(function(res){
			console.log(res)
			$rootScope.user = res;
		}, function(err) {
			console.log(err)
			// $rootScope.user = false;
		});
		// console.log($rootScope.user);
	}
	getUser();
    
 //    $scope.$on('updateUser', function() {
 //    	console.log('reading broadcast');
 //    	getUser();
 //    })


	$scope.logout = function() {
		authService.logMeOut().then(function(res) {
			getUser();
			// console.log(res)
			$rootScope.user = false;
			$location.path('/auth')
		})
		.catch(function(err) {
			console.log('error in the logged in ctrl', err);
		})
	}


})










	// $scope.profile = app;

	//define, and initialize current user on scope
	// $scope.currentUser = null;
	// $scope.userRoles = USER_ROLES;
	// $scope.isAuthorized = authService.isAuthorized;

	// $scope.setCurrentUser = function(user) {
	// 	$scope.currentUser = user;
	// }
