(function() {

  'use strict';

  angular.module('pb.ds.landing').config(function($stateProvider) {
    $stateProvider.state('landing', {
      url: '/landing',
      templateUrl: 'modules/landing/templates/landing.html',
      controller: 'LandingController as landing',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing'
      }
    });
    $stateProvider.state('landing-bgImg', {
      url: '/landing/bg-image',
      templateUrl: 'modules/landing/templates/landing.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-bgImg'
      }
    });
    $stateProvider.state('landing-threeCol', {
      url: '/landing/threeCol',
      templateUrl: 'modules/landing/templates/landing-threeCol.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-threeCol'
      }
    });
    $stateProvider.state('landing-form', {
      url: '/landing/form',
      templateUrl: 'modules/landing/templates/landing-form.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-form'
      }
    });
    $stateProvider.state('landing-product', {
      url: '/landing/product',
      templateUrl: 'modules/landing/templates/landing-product.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-product'
      }
    });
    $stateProvider.state('landing-info', {
      url: '/landing/info',
      templateUrl: 'modules/landing/templates/landing-info.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-info'
      }
    });
    $stateProvider.state('landing-slider', {
      url: '/landing/slider',
      templateUrl: 'modules/landing/templates/landing-slider.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing landing-slider'
      }
    });
  });

})();
