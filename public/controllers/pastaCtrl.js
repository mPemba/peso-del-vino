var app = angular.module('vino');

app.controller('pastaCtrl', function($scope, wineService) {

$scope.getLasagne = function() {
	var grapeArray = [];
	wineService.getLasagneWine($scope.grape).then(function(res) {
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

$scope.getWhitePasta = function() {
	var grapeArray = [];
	wineService.getWhitePastaWine($scope.grape).then(function(res) {
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

$scope.getTomatoPasta = function() {
	var grapeArray = [];
	wineService.getTomatoPastaWine($scope.grape).then(function(res) {
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

$scope.getFishPasta = function() {
	var grapeArray = [];
	wineService.getFishPastaWine($scope.grape).then(function(res) {
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
	$('.form-control').slideUp('slow');
	$('.cookingStyleBtn').slideUp('slow');
	$('.form-control').addClass('hide');
	$('.cookingStyleBtn').addClass('hide');
});

});
