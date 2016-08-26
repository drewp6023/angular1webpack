var angular = require('angular');

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

.factory('fireRef', ['$firebaseObject', function ($firebaseObject) {
	var ref = firebase.database().ref();

	return $firebaseObject(ref);
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