(function () {
  'use strict';

  angular.module('pb.ds.accordions').config(function ($stateProvider) {
    $stateProvider.state('accordions', {
      url: '/accordions',
      templateUrl: 'modules/accordions/accordions.html',
      // abstract: true,
      controller: 'AccordionsController as accordions',
      data: {
        pageTitle: 'Accordions'
      }
    });
  });
})();
