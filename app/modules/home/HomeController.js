(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', '$firebaseArray', function ($rootScope, $scope, $firebaseArray) {
    	var usersRef = $firebaseArray(firebase.database().ref().child('users'));

    	usersRef.$loaded(function () {
    		$scope.users = usersRef;
    	});
    }];
 
    app.controller("HomeController", HomeController);
 
})();