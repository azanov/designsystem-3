(function() {

  'use strict';

  angular.module('pb.ds.brand').config(function($stateProvider) {
    $stateProvider.state('brand', {
      url: '/brand',
      templateUrl: 'modules/brand/templates/brand.html',
      controller: 'BrandController as bc',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'brand'
      }
    })

    .state('brand.styleguide', {
      url: '/styleguide',
      templateUrl: 'modules/brand/templates/brand-styleguide.html',
      controller: 'StyleGuideController as style',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'brand'
      }
    })

    .state('brand.voice', {
      url: '/voice',
      templateUrl: 'modules/brand/templates/brand-voice.html',
      controller: 'BrandController as bc',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'brand'
      }
    })


    .state('brand.personality', {
      url: '/personality',
      templateUrl: 'modules/brand/templates/brand-personality.html',
      controller: 'BrandController as bc',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'brand'
      }
    });

  });

})();
