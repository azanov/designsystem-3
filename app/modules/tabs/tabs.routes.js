(function () {
  'use strict';

  angular.module('pb.ds.tabs').config(function ($stateProvider) {
    $stateProvider.state('tabs', {
      url: '/tabs',
      templateUrl: 'modules/tabs/tabs.html',
      // abstract: true,
      controller: 'TabsController as tabs',
      data: {
        pageTitle: 'Tabs'
      }
    });
  });
})();
