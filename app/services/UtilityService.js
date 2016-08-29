(function() {

    var app = angular.module("core");

    var UtilityService = ['$uibModal', '$rootScope', function($uibModal, $rootScope) {

        var alert = function(message, callback) {
            var modalInstance = $uibModal.open({
                size: 'sm',
                backdrop: 'static',
                //windowClass: '',
                controller: function($scope) {

                    $scope.ok = function() {

                        modalInstance.dismiss('cancel');

                        if (typeof(callback) == 'function') {
                            callback();
                        }

                        return true;
                    };
                },
                template: '<div class="modal-body"><p>' + message + '</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button></div>'
            });
        }

        var confirm = function(message, okCallback, cancelCallback) {

            // MS - Avoid dupe modals
            if (message == $rootScope.modalOpen) {
                return false;
            }

            $rootScope.modalOpen = message;

            var modalInstance = $uibModal.open({
                size: 'sm',
                backdrop: 'static',
                keyboard: false,
                //windowClass: '',
                controller: function($scope) {

                    $scope.ok = function() {

                        $rootScope.modalOpen = null;

                        modalInstance.dismiss('cancel');

                        if (typeof(okCallback) == 'function') {
                            okCallback();
                        }

                        return true;
                    };

                    $scope.cancel = function() {

                        $rootScope.modalOpen = null;

                        modalInstance.dismiss('cancel');

                        if (typeof(cancelCallback) == 'function') {
                            cancelCallback();
                        }

                        return true;
                    }
                },
                template: '<div class="modal-body"><p>' + message + '</p></div><div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">Cancel</button><button class="btn btn-primary" ng-click="ok()">OK</button></div>'
            });
        }

        var generateUniqueId = function(charCnt) {
            var identifier = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var charCnt = (typeof charCnt !== 'undefined' && Number.isInteger(charCnt)) ? charCnt : 5;

            for (var i = 0; i < charCnt; i++) {
                identifier += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return identifier;
        }

        return {
            alert: alert,
            confirm: confirm,
            generateUniqueId: generateUniqueId
        }

    }];


    app.factory("UtilityService", UtilityService);


})();