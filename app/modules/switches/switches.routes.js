(function () {
  'use strict';

  angular.module('pb.ds.switches').config(function ($stateProvider) {
    $stateProvider.state('switches', {
      url: '/switches',
      templateUrl: 'modules/switches/switches.html',
      // abstract: true,
      controller: 'SwitchesController as switch',
      data: {
        pageTitle: 'Switches'
      }
    });
  });
})();
