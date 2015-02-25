var app = angular.module('vino');

app.controller('authCtrl', function($scope, $location, authService) {
	$scope.state = 'login';
	$scope.clickLogin = function() {
		authService.login($scope.email, $scope.password).then(function() {
			$location.path('/home');
			$scope.email = '';
			$scope.password = '';
		}).catch(function(err) {
			$scope.loginError = true;
		})
	}
	$scope.clickRegister = function() {
		authService.register($scope.email, $scope.password).then(function() {
			$scope.state = 'login';
			$scope.registerSuccessful = true;
			$scope.email = '';
			$scope.password = '';
		}).catch(function(err) {
			$scope.regError = true;
		})
	}
	$scope.changeState = function(newState) {
		$scope.loginError = false;
		$scope.regError = false;
		$scope.state = newState;
	}
})