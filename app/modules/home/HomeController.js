(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', '$firebaseArray', 'UtilityService', function ($rootScope, $scope, $firebaseArray, UtilityService) {
    	var usersRef = $firebaseArray(firebase.database().ref().child('users'));

    	usersRef.$loaded(function () {
    		$scope.users = usersRef;
    	});
    }];
 
    app.controller("HomeController", HomeController);
 
})();