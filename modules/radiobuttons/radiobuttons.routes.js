(function () {
  'use strict';

  angular.module('pb.ds.radiobuttons').config(function ($stateProvider) {
    $stateProvider.state('radiobuttons', {
      url: '/radiobuttons',
      templateUrl: 'modules/radiobuttons/radiobuttons.html',
      // abstract: true,
      controller: 'RadiobuttonsController as radio',
      data: {
        pageTitle: 'Radio Buttons'
      }
    });
  });
})();
