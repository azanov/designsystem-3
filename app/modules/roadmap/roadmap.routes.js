(function () {
  'use strict';

  angular.module('pb.ds.roadmap').config(function ($stateProvider) {
    $stateProvider.state('roadmap', {
      url: '/roadmap',
      templateUrl: 'modules/roadmap/roadmap.html',
      // abstract: true,
      controller: 'RoadmapController as roadmap',
      resolve: {
        RoadmapResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'roadmap'});
        }
      },
      data: {
        pageTitle: 'Roadmap'
      }
    });
  });
})();
