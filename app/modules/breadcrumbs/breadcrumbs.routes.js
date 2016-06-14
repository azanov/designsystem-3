(function () {
  'use strict';

  angular.module('pb.ds.breadcrumbs').config(function ($stateProvider) {
    $stateProvider.state('breadcrumbs', {
      url: '/breadcrumbs',
      templateUrl: 'modules/breadcrumbs/breadcrumbs.html',
      // abstract: true,
      controller: 'BreadcrumbsController as breadcrumbs',
      data: {
        pageTitle: 'Breadcrumbs'
      }
    });
  });
})();
