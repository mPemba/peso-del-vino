var app = angular.module('vino');

app.controller('loggedInCtrl', function($scope, $rootScope, $location, loggedInService, authService) {

	var getUser = function() {
		authService.getUser().then(function(res){
			console.log(res)
			$rootScope.user = res;
		}, function(err) {
			console.log(err)
		});
	}

	getUser();

	$scope.logout = function() {
		authService.logMeOut().then(function(res) {
			getUser();
			$rootScope.user = false;
			$location.path('/auth')
		})
		.catch(function(err) {
			console.log('error in the logged in ctrl', err);
		})
	}

	$('.startButton').on('click', function() {
		$('.homeHeadline').fadeOut(400).addClass('hide');
		$('.homeSubHeadline').fadeOut(400).addClass('hide');
		$('.startButton').fadeOut(400).addClass('hide');
		$('.homeLink').fadeOut(100).addClass('hide');
		$('.startOver').fadeIn(400).removeClass('hide');
		$('.navbar').slideDown("slow").removeClass('hide');
		$('.navbar-link').slideDown("slow").removeClass('hide');
	});

	$('.startOver').on('click', function() {
		$('.startOver').fadeOut(100).addClass('hide');
		$('.homeLink').fadeIn(400).removeClass('hide');
		$('.navbar').fadeOut(400).addClass('hide');
		$('.navbar-link').fadeOut(400).addClass('hide');
		$('.cookingStyleNavbar').fadeOut(400).addClass('hide');
		$('.cookingStyleBtn').fadeOut(400).addClass('hide');
		$('.homeHeadline').fadeIn(400).removeClass('hide');
		$('.homeSubHeadline').fadeIn(400).removeClass('hide');
		$('.startButton').fadeIn(400).removeClass('hide');
	});

	$('.main-course-link').on('click', function() {
		$('.navbar').fadeOut(800).addClass("hide");
		$('.navbar-link').fadeOut(400).addClass("hide");
		$('.cookingStyleNavbar').fadeIn(400);
		$('.cookingStyleBtn').fadeIn(400);
	});

	$('.homeLink').on('click', function() {
		$('.navbar').fadeOut(400).addClass('hide');
		$('.navbar-link').fadeOut(400).addClass('hide');
		$('.homeHeadline').fadeIn(400).removeClass('hide');
		$('.homeSubHeadline').fadeIn(400).removeClass('hide');
		$('.startButton').fadeIn(400).removeClass('hide');
	});
});
