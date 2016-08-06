var angular = require('angular');

angular.module('core', [
	'ui.router'
])

.controller('MainController', ['$rootScope', '$scope', function ($rootScope, $scope) {
	
}])

.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '/app/modules/home/home.html',
			controller: 'HomeController'
		});
});

// angular.module('', []);
// angular.module('', []);
// angular.module('', []);
// angular.module('', []);