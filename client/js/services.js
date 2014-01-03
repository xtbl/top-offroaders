'use strict';

angular.module('myApp.services', ['ngResource'])
	.factory('Car', ['$resource',
		function ($resource) {
			return $resource('http://localhost:3000/cars/:carId', {});
		}]);