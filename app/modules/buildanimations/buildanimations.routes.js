(function () {
  'use strict';

  angular.module('pb.ds.animations').config(function ($stateProvider) {
    $stateProvider.state('animations', {
      url: '',
      templateUrl: 'modules/animations/templates/animations.html',
      controller: 'BuildAnimationsController as vm',
      data: {
        pageTitle: 'Build Animations',
        access: 'public',
        bodyClass: 'animations'
      }
    })

      .state('animations.page', {
        url: '/animations',
        views: {
          overview: {
            templateUrl: 'modules/animations/templates/overview.html'
          },
          sandbox: {
            templateUrl: 'modules/animations/templates/sandbox.html'
          },
          queue: {
            templateUrl: 'modules/animations/templates/angular-animations.html'
          },
          stagger: {
            templateUrl: 'modules/animations/templates/stagger.html'
          },
          base: {
            templateUrl: 'modules/animations/templates/baseanimations.html'
          }
        }
      });
  });
})();
