(function () {
 
    var app = angular.module("core");
 
    var HomeController = ['$rootScope', '$scope', 'fireRef', function ($rootScope, $scope, fireRef) {
        $scope.data = fireRef;

        $scope.data.$loaded(function () {
            var people = $scope.data.people;

            angular.forEach(people, function (obj) {
                console.log(obj.birthday);
            });
        });
    }];
 
    app.controller("HomeController", HomeController);
 
})();