(function () {
  'use strict';

  angular.module('pb.ds.modals').config(function ($stateProvider) {
    $stateProvider.state('modals', {
      url: '/modals',
      templateUrl: 'modules/modals-popovers/modals-index.html',
      abstract: true,
      controller: 'ModalsController as modals',
      data: {
        pageTitle: 'Modals and Popovers'
      }
    })
    .state('modals.modals-popovers', {
      url: '/modals-popovers',
      templateUrl: 'modules/modals-popovers/modals-popovers.html'
    });
  });
})();
