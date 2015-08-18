var app = angular.module('vino');

app.controller('dessertCtrl', function($scope, wineService) {
$scope.getChocolate = function() {
	var grapeArray = [];
	wineService.getChocolateWine($scope.grape).then(function(res) {
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

$scope.getDulceDeLeche = function() {
	var grapeArray = [];
	wineService.getDulceDeLecheWine($scope.grape).then(function(res) {
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
