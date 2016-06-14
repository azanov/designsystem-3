(function () {
  'use strict';

  angular.module('pb.ds.uibootstrap').config(function ($stateProvider) {
    $stateProvider.state('uibootstrap', {
      url: '/uibootstrap',
      templateUrl: 'modules/uibootstrap/uibootstrap.html',
      // abstract: true,
      controller: 'uiBootstrapController as uibootstrap',
      data: {
        pageTitle: 'Angular Ui Bootstrap'
      }
    });
  });
})();
