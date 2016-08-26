var angular = require('angular');

angular.module('core', [
	'ui.router',
	'firebase'
])

.constant('FIREBASE_CONFIG', {
	apiKey: "XFsfRr6M5hRQRGoavo6OUyWTXGPGU7ZzMeo3ktWY",
	authDomain: "393369737235.firebaseapp.com",
	databaseURL: "https://blazing-dtp.firebaseio.com",
	storageBucket: "blazing-dtp.appspot.com"
})

.controller('MainController', ['$rootScope', '$scope', 'FIREBASE_CONFIG', function ($rootScope, $scope, FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
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