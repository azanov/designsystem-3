(function () {
  'use strict';

  angular.module('pb.ds.uibootstrap').config(function ($stateProvider) {
    $stateProvider.state('uibootstrap', {
      url: '/uibootstrap',
      templateUrl: 'modules/uibootstrap/uibootstrap.html',
      // abstract: true,
      controller: 'uiBootstrapController as uibs',
      data: {
        pageTitle: 'Angular Ui Bootstrap'
      }
    });
  });
})();
