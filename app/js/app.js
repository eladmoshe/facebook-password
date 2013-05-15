'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/welcome-page.html', controller: 'welcomeCtrl'});
    $routeProvider.when('/warning', {templateUrl: 'partials/warning-page.html', controller: 'warningCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
