'use strict';

angular.module('myApp', ['ngRoute','myApp.controllers', 'myApp.services', 'myApp.filters'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/cars', {templateUrl: 'partials/car-list.html', controller: 'CarListCtrl'});
	$routeProvider.when('/cars/:carId', {templateUrl: 'partials/car-detail.html', controller: 'CarDetailCtrl'});
	$routeProvider.otherwise({redirectTo: '/cars'});
}]);