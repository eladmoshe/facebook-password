'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.controllers','myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/partials/welcome-page.html', controller: 'welcomeCtrl'});
    $routeProvider.when('/warning', {templateUrl: 'app/partials/warning-page.html', controller: 'warningCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
