(function () {
  'use strict';

  angular.module('pb.ds.dropdowns').config(function ($stateProvider) {
    $stateProvider.state('dropdowns', {
      url: '/dropdowns',
      templateUrl: 'modules/dropdowns/dropdowns.html',
      // abstract: true,
      controller: 'DropdownsController as drop',
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
        pageTitle: 'Dropdowns'
      }
    });
  });
})();
