(function () {
  'use strict';

  angular.module('pb.ds.progress').config(function ($stateProvider) {
    $stateProvider.state('progress', {
      url: '/progress',
      templateUrl: 'modules/progress/progress.html',
      // abstract: true,
      controller: 'ProgressController as progress',
      data: {
        pageTitle: 'Progress'
      }
    });
  });
})();
