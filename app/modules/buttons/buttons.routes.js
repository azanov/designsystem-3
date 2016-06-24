(function () {
  'use strict';

  angular.module('pb.ds.buttons').config(function ($stateProvider) {
    $stateProvider.state('buttons', {
      url: '/buttons',
      templateUrl: 'modules/buttons/buttons.html',
      // abstract: true,
      controller: 'ButtonsController as buttons',
      data: {
        pageTitle: 'Buttons'
      }
    });
  });
})();
