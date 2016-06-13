(function () {
  'use strict';

  angular.module('pb.ds.tiles').config(function ($stateProvider) {
    $stateProvider.state('tiles', {
      url: '/tiles',
      templateUrl: 'modules/tiles/tiles.html',
      // abstract: true,
      controller: 'TilesController as tiles',
      data: {
        pageTitle: 'Tiles'
      }
    });
  });
})();
