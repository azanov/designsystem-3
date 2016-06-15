(function () {
  'use strict';

  angular.module('pb.ds.sample').config(function ($stateProvider) {
    $stateProvider.state('sample', {
      url: '/sample',
      templateUrl: 'modules/sample/sample.html',
      // abstract: true,
      controller: 'SampleController as sample',
      data: {
        pageTitle: 'Sample'
      }
    });
  });
})();
