(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', '$firebaseObject', function ($rootScope, $scope, $firebaseObject) {
    	console.log($firebaseObject);
    }];
 
    app.controller("HomeController", HomeController);
 
})();