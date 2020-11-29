'use strict';

angular.
  module('enterpriseAngApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login-view', {
          template: '<login-view></login-view>'
        }).
        when('/register-view', {
          template: '<register-view></register-view>'
        }).
        otherwise({redirectTo: '/login-view'});
    }
  ]);
