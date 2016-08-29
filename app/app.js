var angular = require('angular');
// returns compiled css code from file.scss, resolves Sass and CSS imports and url(...)s
require("!style!css!sass!../app/assets/css/custom.scss");

angular.module('core', [
	'ui.router',
	'firebase'
])

.constant('FIREBASE_CONFIG', {
	apiKey: "AIzaSyAxLArXHeV6Zgl5gbo3IjVeQ5WEdKJ5LMc",
	authDomain: "blazing-dtp.firebaseapp.com",
	databaseURL: "https://blazing-dtp.firebaseio.com",
	storageBucket: "blazing-dtp.appspot.com",
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