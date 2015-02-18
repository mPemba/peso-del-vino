var app = angular.module('vino');

app.service('wineService', function($http) {

this.getSimpleBeefWine = function() {
	return $http({
	  method: 'GET',
	  url: 'http://api.snooth.com/wines/?akey=cadfjyan4vtd8bw0pwqif8utmtaoaxoov0gpkp9rk1np1eo8&n=5&q=cabernet&q=malbec+cabernet'
	})
}

this.getSlowCookBeefWine = function() {
	return $http({
		method: 'GET',
		url: 'http://api.snooth.com/wines/?akey=cadfjyan4vtd8bw0pwqif8utmtaoaxoov0gpkp9rk1np1eo8&n=5&q=Rhône'
	})
}


})