(function () {
  'use strict';

  angular.module('pb.ds.checkboxes').config(function ($stateProvider) {
    $stateProvider.state('checkboxes', {
      url: '/checkboxes',
      templateUrl: 'modules/checkboxes/checkboxes.html',
      // abstract: true,
      controller: 'CheckboxesController as check',
      data: {
        pageTitle: 'Checkboxes (Template)'
      }
    });
  });
})();
