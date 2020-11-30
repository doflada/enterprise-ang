'use strict';

angular.
  module('officeView').
  component('officeView', {
    templateUrl: 'office-view/office-view.template.html',
    controller: function OfficeController($scope, CurrentData) {
      this.userName = CurrentData.data.userName;
    }
  });
