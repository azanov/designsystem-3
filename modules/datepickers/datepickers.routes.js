(function () {
  'use strict';

  angular.module('pb.ds.datepickers').config(function ($stateProvider) {
    $stateProvider.state('datepickers', {
      url: '/datepickers',
      templateUrl: 'modules/datepickers/datepickers.html',
      // abstract: true,
      controller: 'DatePickersController as date',
      data: {
        pageTitle: 'Date Pickers'
      }
    });
  });
})();
