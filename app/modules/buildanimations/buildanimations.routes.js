(function() {

  'use strict';

  angular.module('pb.ds.buildanimations').config(function($stateProvider) {
    $stateProvider.state('buildanimations', {
        abstract: true,
        url: '/buildanimations',
        templateUrl: 'modules/buildanimations/templates/buildanimations.html',
        controller: 'BuildAnimationsController as vm',
        data: {
          pageTitle: 'Build Animations',
          access: 'public',
          bodyClass: 'buildanimations'
        }
      })

      .state('buildanimations.page', {
        url: '',
        views: {
          overview: {
            templateUrl: 'modules/buildanimations/templates/overview.html'
          },
          sandbox: {
            templateUrl: 'modules/buildanimations/templates/sandbox.html'
          },
          queue: {
            templateUrl: 'modules/buildanimations/templates/queue.html'
          },
          stagger: {
            templateUrl: 'modules/buildanimations/templates/stagger.html'
          }
        }
      });


  });
})();
