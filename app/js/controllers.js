'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('wrapperCtrl', ['$scope', function($scope) {
        $scope.content = {template: 'app/partials/welcome-page.html'};
    }])
    .controller('welcomeCtrl', ['$scope', '$location', function($scope) {
        $scope.password = {text: null};
        $scope.email = {text: null};

        function checkAndSetPath (newVal) {
            if (newVal && newVal.length > 2) {
                $scope.content.template = 'app/partials/warning-page.html';
            }
        }

        $scope.$watch("password.text", function(newVal) {
            checkAndSetPath(newVal);
        });
        $scope.$watch("email.text", function(newVal) {
            checkAndSetPath(newVal);
        });

        $scope.submit = function() {

        }

    }])
;