var app = angular.module('vino');

app.controller('authCtrl', function($scope, $location, authService) {
	$scope.state = 'login';

	var updateUser = function() {
		authService.getProfile().then(function(data) {
			$scope.user = data;
		})
	}
	$scope.clickLogin = function() {
		authService.login($scope.email, $scope.password).then(function() {
			$location.path('/home');
		}).catch(function(err) {
			$scope.loginError = true;
		})
	}
	$scope.clickRegister = function() {
		authService.register($scope.email, $scope.password).then(function() {
			$scope.state = 'login';
			$scope.registerSuccessful = true;
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

	// $scope.credentials = {
	// 	email: '',
	// 	password: ''
	// };

	// $scope.login = function(credentials) {
	// 	authService.login(credentials).then(function(user) {
	// 		$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
	// 		$scope.setCurrentUser(user);
	// 	}, function() {
	// 		$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
	// 	})
	// }