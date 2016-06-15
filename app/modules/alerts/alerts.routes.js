(function () {
  'use strict';

  angular.module('pb.ds.alerts').config(function ($stateProvider) {
    $stateProvider.state('alerts', {
      url: '/alerts',
      templateUrl: 'modules/alerts/alerts.html',
      // abstract: true,
      controller: 'AlertsController as alerts',
      data: {
        pageTitle: 'Alerts'
      }
    });
  });
})();
