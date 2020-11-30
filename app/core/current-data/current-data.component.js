'use strict';

angular.
  module('core.currentData').
  factory('CurrentData', function() {
    return {
      data: {
        userName: "",
        firstName: "",
        lastName: ""
      },
      update: function(user, first, last) {
         this.data.userName = user;
         this.data.firstName = first;
         this.data.lastName = last;
       }
     };
   });
