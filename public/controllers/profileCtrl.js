var app = angular.module('vino');

app.controller('profileCtrl', function($scope, profile) {
	$scope.profile = profile;
})