var app = angular.module('vino');

app.controller('lambCtrl', function($scope, wineService) {

$scope.getHerbLamb = function() {
	var grapeArray = [];
	wineService.getHerbLambWine($scope.grape).then(function(res) {
		$scope.grapeData = res.data.wines;
		var grapeData = $scope.grapeData;
		for (var key in grapeData) {
			grapeArray.push({
				image: grapeData[key].image,
				name: grapeData[key].name,
				price: grapeData[key].price,
				region: grapeData[key].region,
				varietal: grapeData[key].varietal,
				vintage: grapeData[key].vintage
			})
		}
		$scope.wineData = grapeArray;
	})
};

$scope.getLambChop = function() {
	var grapeArray = [];
	wineService.getLambChopWine($scope.grape).then(function(res) {
		$scope.grapeData = res.data.wines;
		var grapeData = $scope.grapeData;
		for (var key in grapeData) {
			grapeArray.push({
				image: grapeData[key].image,
				name: grapeData[key].name,
				price: grapeData[key].price,
				region: grapeData[key].region,
				varietal: grapeData[key].varietal,
				vintage: grapeData[key].vintage
			})
		}
		$scope.wineData = grapeArray;
	})
};

$scope.getSlowCookLamb = function() {
	var grapeArray = [];
	wineService.getSlowCookLambWine($scope.grape).then(function(res) {
		$scope.grapeData = res.data.wines;
		var grapeData = $scope.grapeData;
		for (var key in grapeData) {
			grapeArray.push({
				image: grapeData[key].image,
				name: grapeData[key].name,
				price: grapeData[key].price,
				region: grapeData[key].region,
				varietal: grapeData[key].varietal,
				vintage: grapeData[key].vintage
			})
		}
		$scope.wineData = grapeArray;
	})
};

$('.cookingStyleBtn').on('click', function() {
	$('.cookingStyleNavbar').slideUp('slow');
	$('.cookingStyleBtn').slideUp('slow');
	$('.cookingStyleNavbar').addClass('hide');
	$('.cookingStyleBtn').addClass('hide');
});

});
