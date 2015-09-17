'use strict';

(function () {
	angular
		.module('clementineApp')
		.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {

			function getUserData () {
				userFactory.getData()
					.then(function (res) {
						$scope.userName = res.data.username;
						$scope.displayName = res.data.displayName;
						$scope.githubId = res.data.id;
						$scope.publicRepos = res.data.publicRepos;
					});
			}

			getUserData();

		}]);
})();