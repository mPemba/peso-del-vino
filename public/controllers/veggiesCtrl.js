var app = angular.module('vino');

app.controller('veggiesCtrl', function($scope, wineService) {

$scope.getRoot = function() {
  var grapeArray = [];
  wineService.getRootWine($scope.grape).then(function(res) {
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

$scope.getAvocado = function() {
  var grapeArray = [];
  wineService.getAvocadoWine($scope.grape).then(function(res) {
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

$scope.getEggplant = function() {
  var grapeArray = [];
  wineService.getEggplantWine($scope.grape).then(function(res) {
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

$scope.getBean = function() {
  var grapeArray = [];
  wineService.getBeanWine($scope.grape).then(function(res) {
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

$scope.getTomato = function() {
  var grapeArray = [];
  wineService.getTomatoWine($scope.grape).then(function(res) {
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
