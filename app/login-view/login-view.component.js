'use strict';

angular.
  module('loginView').
  component('loginView', {
    templateUrl: 'login-view/login-view.template.html',
    controller: function LoginController($scope, $location, CurrentData) {

      $scope.master = {};
      $scope.data = CurrentData.data;

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        CurrentData.update(user.username, user.username, user.username);
        $location.path( "/office-view" );
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

    }
  });
