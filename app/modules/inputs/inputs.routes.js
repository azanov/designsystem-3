(function () {
  'use strict';

  angular.module('pb.ds.inputs').config(function ($stateProvider) {
    $stateProvider.state('inputs', {
      url: '/inputs',
      templateUrl: 'modules/inputs/inputs.html',
      // abstract: true,
      controller: 'InputsController as inputs',
      resolve: {
        PeopleResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'people_10'
          });
        },
        CountriesResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'countries'
          });
        }
      },
      data: {
        pageTitle: 'Input Fields'
      }
    });
  });
})();
