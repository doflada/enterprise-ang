'use strict';

angular.
  module('loginView').
  component('loginView', {
    templateUrl: 'login-view/login-view.template.html',
    controller: function LoginController($scope, $http, $location, CurrentData) {

      $scope.master = {};
      $scope.data = CurrentData.data;

      $scope.update = function(user) {

        $http({
          method: 'POST',
          url: 'http://localhost/confs/checkuser.php',
          data: {
            data: user
          }
        }).then(function successCallback(response) {
          if ( response.data.length === 1 ) {
             console.log(response);

             $scope.master = angular.copy(user);
             CurrentData.update(response.data[0].username,
                                response.data[0].prenume,
                                response.data[0].nume,
                                response.data[0].email);

             $location.path( "/office-view" );
           }
        }, function errorCallback(response) {
          alert(response);
          $location.path( "/login-view" );
        });

      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

    }
  });
