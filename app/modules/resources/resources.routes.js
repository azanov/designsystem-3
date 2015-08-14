(function() {

  'use strict';

  angular.module('pb.ds.resources').config(function($stateProvider) {
    $stateProvider.state('resources', {
      url: '/resources',
      templateUrl: 'modules/resources/templates/resources.html',
      controller: 'ResourcesController as resources',
      data: {
        pageTitle: 'Principles - Design Philosophy',
        access: 'public',
        bodyClass: 'resources'
      }
    })

    .state('resources.designers', {
      url: '/designers',
      templateUrl: 'modules/resources/templates/resources-designers.html',
      controller: 'ResourcesController as resources',
      data: {
        pageTitle: 'Resources for Designers',
        access: 'public',
        bodyClass: 'resources'
      }
    })

    .state('resources.developers', {
      url: '/developers',
      templateUrl: 'modules/resources/templates/resources-developers.html',
      controller: 'ResourcesController as resources',
      data: {
        pageTitle: 'Resources for Developers',
        access: 'public',
        bodyClass: 'resources'
      }
    });




  });

})();
