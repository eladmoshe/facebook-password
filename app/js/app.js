'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.controllers','myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/partials/wrapper.html', controller: 'wrapperCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
