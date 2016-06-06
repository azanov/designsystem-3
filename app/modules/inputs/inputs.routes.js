(function () {
  'use strict';

  angular.module('pb.ds.inputs').config(function ($stateProvider) {
    $stateProvider.state('inputs', {
      url: '/inputs',
      templateUrl: 'modules/inputs/inputs-index.html',
      // abstract: true,
      controller: 'InputsController as inputs',
      data: {
        pageTitle: 'Input Fields'
      }
    });
  });
})();
