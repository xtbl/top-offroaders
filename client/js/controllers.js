'use strict';

angular.module('myApp.controllers', [])
	.controller('MainCtrl', ['$scope','Car', function ($scope, Car) {
		$scope.test = "test";
	}])
	.controller('CarListCtrl', ['$scope','Car', function ($scope, Car) {
		$scope.cars = Car.query();
	}]);