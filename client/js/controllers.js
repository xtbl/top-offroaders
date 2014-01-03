'use strict';

angular.module('myApp.controllers', [])
	.controller('MainCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
		$rootScope.go = function (path) {
			$location.path(path);
		};
	}])
	.controller('CarListCtrl', ['$scope','Car', function ($scope, Car) {
		$scope.cars = Car.query();
	}])
	.controller('CarDetailCtrl', ['$scope', '$routeParams', 'Car', function ($scope, $routeParams, Car) {
		$scope.car = Car.get({carId: $routeParams.carId});
	}]);