(function () {
  'use strict';

  angular.module('pb.ds.badges').config(function ($stateProvider) {
    $stateProvider.state('badges', {
      url: '/badges',
      templateUrl: 'modules/badges/badges.html',
      // abstract: true,
      controller: 'BadgesController as badges',
      data: {
        pageTitle: 'Badges'
      }
    });
  });
})();
