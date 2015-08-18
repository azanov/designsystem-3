(function() {

  'use strict';

  angular.module('pb.ds.resources').config(function($stateProvider) {
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

    .state('resources.page', {
      url: '',
      views: {
        developers: {
          templateUrl: 'modules/resources/templates/resources-developers.html'
        },
        designers: {
          templateUrl: 'modules/resources/templates/resources-designers.html'
        }
      }
    });

  });

})();
