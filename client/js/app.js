'use strict';

angular.module('myApp', ['ngRoute','myApp.controllers', 'myApp.services'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/cars', {templateUrl: 'partials/car-list.html', controller: 'CarListCtrl'});
	$routeProvider.when('/cars/:carId', {templateUrl: 'partials/car-detail.html', controller: 'CarDetailCtrl'});
	$routeProvider.otherwise({redirectTo: '/cars'});
}]);