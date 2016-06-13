(function () {
  'use strict';

  angular.module('pb.ds.gallery').config(function ($stateProvider) {
    $stateProvider.state('gallery', {
      url: '/gallery',
      templateUrl: 'modules/gallery/gallery.html',
      // abstract: true,
      controller: 'GalleryController as gallery',
      data: {
        pageTitle: 'Gallery'
      }
    });
  });
})();
