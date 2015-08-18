var app = angular.module('vino');

app.controller('authCtrl', function($scope, $rootScope, $location, authService) {
	$scope.state = 'login';

	// $rootScope.user = user;
	// console.log($rootScope.user)

	var updateUser = function() {
		authService.getUser().then(function(data) {
			$rootScope.user = data;
		})
	};

	$scope.clickLogin = function() {
		authService.login($scope.email, $scope.password).then(function() {
			updateUser();
			$location.path('/home');
		}).catch(function(err) {
			$scope.loginError = true;
		})
	};

	$scope.clickRegister = function() {
		authService.register($scope.email, $scope.password).then(function() {
			updateUser();
			$scope.state = 'login';
			$scope.registerSuccessful = true;
		}).catch(function(err) {
			$scope.regError = true;
		})
	};

	$scope.changeState = function(newState) {
		$scope.loginError = false;
		$scope.regError = false;
		$scope.state = newState;
	};

});
