'use strict';

(function () {
	angular
		.module('clementineApp', ['ngResource'])
		.controller('clickController',
			['$scope',
			'$resource',

			function ($scope, $resource) {

				var Click = $resource('/api/clicks');

				$scope.getClicks = function () {
					Click.query(function (results) {
						$scope.clicks = results[0].clicks;
					});
				};

				$scope.getClicks();

				$scope.addClick = function () {
					Click.save(function () {
						$scope.getClicks();
					});
				};

				$scope.resetClicks = function () {
					Click.remove(function () {
						$scope.getClicks();
					});
				};

		}]);
})();
