(function () {
  'use strict';

  angular.module('pb.ds.modals').config(function ($stateProvider) {
    $stateProvider.state('modals', {
      url: '/modals',
      templateUrl: 'modules/modals/modals.html',
      controller: 'ModalsController as mod',
      data: {
        pageTitle: 'Modals'
      }
    });
  });
})();
