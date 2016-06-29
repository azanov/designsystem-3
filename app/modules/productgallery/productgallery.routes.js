(function () {
  'use strict';

  angular.module('pb.ds.productgallery').config(function ($stateProvider) {
    $stateProvider.state('productgallery', {
      url: '/productgallery',
      templateUrl: 'modules/productgallery/productgallery.html',
      controller: 'ProductgalleryController as pg',
      data: {
        pageTitle: 'Product Gallery',
        access: 'public',
        bodyClass: 'productgallery'
      }
    });
  });
})();
