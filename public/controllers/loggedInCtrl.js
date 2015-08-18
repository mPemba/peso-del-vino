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
		$('.homeHeadline').fadeOut(500).addClass('hide');
		$('.homeSubHeadline').fadeOut(500).addClass('hide');
		$('.startButton').fadeOut(500).addClass('hide');
		$('.homeLink').fadeOut(100).addClass('hide');
		$('.startOver').fadeIn(500).removeClass('hide');
		$('.navbar').slideDown("slow").removeClass('hide');
		$('.navbar-link').slideDown("slow").removeClass('hide');
	});

	$('.startOver').on('click', function() {
		$('.startOver').fadeOut(100).addClass('hide');
		$('.homeLink').fadeIn(500).removeClass('hide');
		$('.navbar').fadeOut(500).addClass('hide');
		$('.navbar-link').fadeOut(500).addClass('hide');
		$('.cookingStyleNavbar').fadeOut(500).addClass('hide');
		$('.cookingStyleBtn').fadeOut(500).addClass('hide');
		$('.homeHeadline').fadeIn(500).removeClass('hide');
		$('.homeSubHeadline').fadeIn(500).removeClass('hide');
		$('.startButton').fadeIn(500).removeClass('hide');
	});

	$('.main-course-link').on('click', function() {
		$('.navbar').fadeOut(500).addClass("hide");
		$('.navbar-link').fadeOut(500).addClass("hide");
		$('.cookingStyleNavbar').fadeIn(500);
		$('.cookingStyleBtn').fadeIn(500);
	});

	$('.homeLink').on('click', function() {
		$('.navbar').fadeOut(500).addClass('hide');
		$('.navbar-link').fadeOut(500).addClass('hide');
		$('.homeHeadline').fadeIn(500).removeClass('hide');
		$('.homeSubHeadline').fadeIn(500).removeClass('hide');
		$('.startButton').fadeIn(500).removeClass('hide');
	});
});
