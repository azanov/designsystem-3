(function () {
  'use strict';

  angular.module('pb.ds.widgets').config(function ($stateProvider) {
    $stateProvider.state('widgets', {
      url: '/widgets',
      templateUrl: 'modules/widgets/widgets.html',
      // abstract: true,
      controller: 'WidgetsController as widgets',
      data: {
        pageTitle: 'Widgets'
      }
    });
  });
})();
