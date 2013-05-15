'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('welcomeCtrl', ['$scope','$location', function($scope,$location) {
        $scope.password = {text: null};
        $scope.$watch("password.text", function(newVal) {
            if (newVal && newVal.length > 2) {
                $location.path('/warning');
            }
        });
        $scope.validate = function(){

        }

    }])
    .controller('warningCtrl', [function() {

    }]);