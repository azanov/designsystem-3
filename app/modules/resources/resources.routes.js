(function () {
  'use strict';

  angular.module('pb.ds.resources').config(function ($stateProvider) {
    $stateProvider.state('resources', {
      url: '/resources',
      abstract: true,
      templateUrl: 'modules/resources/templates/resources.html',
      controller: 'ResourcesController as resources',
      data: {
        pageTitle: 'Resources',
        access: 'public',
        bodyClass: 'resources'
      }
    })

      .state('resources.strategy', {
        url: '/strategy',
        templateUrl: 'modules/resources/templates/resources-strategy.html'
      })


      .state('resources.gallery', {
        url: '/gallery',
        templateUrl: 'modules/resources/templates/resources-gallery.html'
      })

      .state('resources.roadmap', {
        url: '/roadmap',
        templateUrl: 'modules/resources/templates/resources-roadmap.html'
      });
  });
})();
