(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', '$firebaseArray', 'UtilityService', function ($rootScope, $scope, $firebaseArray, UtilityService) {
    	var usersRef = $firebaseArray(firebase.database().ref().child('users'));

    	usersRef.$loaded(function () {
    		$scope.users = usersRef;
    	});

    	$scope.deleteUser = function (user) {
    		UtilityService.confirm("Are you sure you want to delete this user?", function () {
    			$scope.users.$remove(user);
    		});
    	}
    }];
 
    app.controller("HomeController", HomeController);
 
})();