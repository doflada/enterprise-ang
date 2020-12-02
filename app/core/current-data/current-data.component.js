'use strict';

angular.
  module('core.currentData').
  factory('CurrentData', function() {
    return {
      data: {
        userName: "",
        firstName: "",
        lastName: "",
        email:""
      },
      update: function(user, first, last, email) {
         this.data.userName = user;
         this.data.firstName = first;
         this.data.lastName = last;
         this.data.email = email;
       }
     };
   });
