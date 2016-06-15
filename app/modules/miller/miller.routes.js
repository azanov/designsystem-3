(function () {
  'use strict';

  angular.module('pb.ds.miller').config(function ($stateProvider) {
    $stateProvider.state('miller', {
      url: '/miller',
      templateUrl: 'modules/miller/miller.html',
      // abstract: true,
      controller: 'MillerController as miller',
      resolve: {
        PeopleResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'people'
          });
        },
        MillerResolve: function ($log, MockDataFactory) {
          return MockDataFactory.get({
            filename: 'millercolumn'
          }, function (response) {
            return response.versionInfos;
          });
        }
      },
      data: {
        pageTitle: 'Miller Columns'
      }
    });
  });
})();
