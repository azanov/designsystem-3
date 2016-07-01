(function () {
  'use strict';

  angular.module('pb.ds.directives').config(function ($stateProvider) {
    $stateProvider.state('directives', {
      url: '/directives',
      templateUrl: 'modules/angular-directives/directives.html',
      controller: 'DirectivesController as ctrl',
      data: {
        pageTitle: 'Angular Directives'
      }
    });
  });
})();
