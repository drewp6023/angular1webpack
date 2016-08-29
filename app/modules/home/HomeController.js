(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', '$firebaseArray', function ($rootScope, $scope, $firebaseArray) {
    	var usersRef = $firebaseArray(firebase.database().ref().child('users'));

    	usersRef.$loaded(function () {
    		$scope.users = usersRef;
    	});

    	$scope.deleteUser = function (user) {
    		var confirm = window.confirm("Are you sure you want to delete this user?");

    		if (confirm) {
    			$scope.users.$remove(user);
    		}
    	}
    }];
 
    app.controller("HomeController", HomeController);
 
})();