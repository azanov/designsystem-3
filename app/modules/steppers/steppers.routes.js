(function () {
  'use strict';

  angular.module('pb.ds.steppers').config(function ($stateProvider) {
    $stateProvider.state('steppers', {
      url: '/steppers',
      templateUrl: 'modules/steppers/steppers.html',
      // abstract: true,
      controller: 'SteppersController as step',
      data: {
        pageTitle: 'Steppers'
      }
    });
  });
})();
