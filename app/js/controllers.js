'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('welcomeCtrl', ['$scope','$location', function($scope,$location) {
        $scope.password = {text: null};
        $scope.email = {text: null};

        function checkAndSetPath (newVal) {
            if (newVal && newVal.length > 2) {
                $location.path('/warning');
            }
        }

        $scope.$watch("password.text", function(newVal) {
            checkAndSetPath(newVal);
        });
        $scope.$watch("email.text", function(newVal) {
            checkAndSetPath(newVal);
        });

        $scope.submit = function(){

        }

    }])
    .controller('warningCtrl', [function() {

    }]);