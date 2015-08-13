(function() {

  'use strict';

  angular.module('pb.ds.brand').config(function($stateProvider) {
    $stateProvider.state('brand', {
      url: '/brand',
      templateUrl: 'modules/brand/templates/brand.html',
      controller: 'BrandController as brand',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'brand'
      }
    });
  });

})();
