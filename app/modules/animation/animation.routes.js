(function () {
  'use strict';

  angular.module('pb.ds.animation').config(function ($stateProvider) {
    $stateProvider.state('animation', {
      url: '',
      templateUrl: 'modules/animation/templates/animation.html',
      controller: 'AnimationController as vm',
      data: {
        pageTitle: 'Build Animations',
        access: 'public',
        bodyClass: 'animation'
      }
    })

      .state('animation.page', {
        url: '/animations',
        views: {
          overview: {
            templateUrl: 'modules/animation/templates/overview.html'
          },
          sandbox: {
            templateUrl: 'modules/animation/templates/sandbox.html'
          },
          queue: {
            templateUrl: 'modules/animation/templates/angular-animations.html'
          },
          stagger: {
            templateUrl: 'modules/animation/templates/stagger.html'
          },
          base: {
            templateUrl: 'modules/animation/templates/baseanimations.html'
          }
        }
      });
  });
})();
