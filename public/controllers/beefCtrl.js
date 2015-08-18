/*
This file manages ajax calls from the beef section.

weakly tossed together by salad maker Michael early in 20015

Clean up August 18th 2015
*/

var app = angular.module('vino');

app.controller('beefCtrl', function($scope, wineService) {

$scope.getSimpleBeef = function() {
	var grapeArray = [];
	wineService.getSimpleBeefWine($scope.grape).then(function(res) {
		$scope.grapeData = res.data.wines;
		var grapeData = $scope.grapeData;
		console.log(grapeData);
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

$scope.getSlowCookBeef = function() {
	var grapeArray = [];
	wineService.getSlowCookBeefWine($scope.grape).then(function(res) {
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

$scope.getPrimeRib = function() {
	var grapeArray = [];
	wineService.getPrimeRibWine($scope.grape).then(function(res) {
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

$scope.getTenderloin = function() {
	var grapeArray = [];
	wineService.getTenderloinWine($scope.grape).then(function(res) {
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

});
