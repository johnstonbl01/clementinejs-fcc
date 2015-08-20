'use strict';

(function () {
	angular
		.module('clementineApp')
		.factory('userFactory', ['$http', function ($http) {

			var userData = {};

			userData.getData = function () {
				return $http.get('/api/user');
			};

			return userData;
		}]);
})();
