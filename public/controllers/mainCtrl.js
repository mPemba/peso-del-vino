var app = angular.module('vino');

app.controller('mainCtrl', function($scope, wineService) {
	$scope.getVino = function() {
		wineService.getWine($scope.grape).then(function(res) {
			$scope.wineData = res.data.wines;
			console.log($scope.wineData);
		})
	}
})