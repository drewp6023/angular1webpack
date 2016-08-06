(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.homeTest = "Weclome to the Home Page!";
    }];
 
    app.controller("HomeController", HomeController);
 
})();