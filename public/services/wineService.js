var app = angular.module('vino');

app.service('wineService', function($http) {

var wineUrl = 'http://api.snooth.com/wines/?akey=cadfjyan4vtd8bw0pwqif8utmtaoaxoov0gpkp9rk1np1eo8&n=5&';
/*  BEEF PAIRINGS  */
this.getSimpleBeefWine = function() {
	return $http({
	  method: 'GET',
	  url: wineUrl + 'q=cabernet&q=malbec+cabernet'
	})
}

this.getSlowCookBeefWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=Rhône'
	})
}

this.getPrimeRibWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=barbera'
	})
}

this.getTenderloinWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=rioja+cabernet'
	})
}
/*   PORK PAIRINGS   */
this.getSausageWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=riesling'
	})
}

this.getSpicyPorkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=Gewürztraminer'
	})
}

this.getHerbPorkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=chardonay+california'
	})
}

this.getBbqPorkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=zinfandel'
	})
}
/*    LAMB PAIRING     */
this.getHerbLambWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=chianti'
	})
}

this.getLambChopWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=brunello'
	})
}

this.getSlowCookLambWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=bordeaux'
	})
}
/*     POULTRY PAIRING    */
this.getFriedChkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=sauvignon+blanc+new'
	})
}

this.getSpicyChkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=cab+sauvignon'
	})
}

this.getRoastChkWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=chard+burgundy'
	})
}

this.getDuckWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=pino+noir'
	})
}
/*     FISH PAIRING    */
this.getRichFishWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=chardonay'
	})
}

this.getLemonFishWine = function() {
	return $http({
		method: 'GET',
		url: wineUrl + 'q=sauvignon+blanc'
	})
}
 this.getGrilledSalmWine = function() {
 	return $http({
 		method: 'GET',
 		url: wineUrl + 'q=pino+gris'
 	})
 }

 this.getBlackSalmWine = function() {
 	return $http({
 		method: 'GET',
 		url: wineUrl + 'q=merlot'
 	})
 }

 this.getRichSalmWine = function() {
 	return $http({
 		method: 'GET',
 		url: wineUrl + 'q=chard'
 	})
 }
/*   CRUSTACEAN PAIRING    */





})