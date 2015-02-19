// var userModel = require('./../api/models/userModel.js');
// var q = require('q');

var app = angular.module('vino');

app.service('profileService', function($q, $http) {
	this.getProfile = function() {
		var dfd = $q.defer();
		dfd.resolve({
			email: 'michael.j.say@gmail.com',
			gender: 'm',
			age: 24,
			bio: 'i am listening to yo la tengo right now'
		})
	}
})