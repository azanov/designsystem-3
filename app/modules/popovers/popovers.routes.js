(function () {
  'use strict';

  angular.module('pb.ds.popovers').config(function ($stateProvider) {
    $stateProvider.state('popovers', {
      url: '/popovers',
      templateUrl: 'modules/popovers/popovers.html',
      // abstract: true,
      controller: 'PopoversController as popovers',
      data: {
        pageTitle: 'Popovers'
      }
    });
  });
})();
