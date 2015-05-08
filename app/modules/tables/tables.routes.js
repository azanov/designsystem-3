(function() {

  'use strict';

  angular.module('pb.ds.tables').config(function($stateProvider) {
    $stateProvider.state('tables', {
      abstract: true,
      url: '/tables',
      templateUrl: 'modules/tables/templates/tables.html',
      controller: 'TablesController as tables',
      data: {
        pageTitle: 'Tables',
        access: 'public',
        bodyClass: 'tables'
      }
    })

    .state('tables.simple', {
      url: '/lib1',
      templateUrl: 'modules/tables/templates/tables-simple.html',
      controller: 'TablesSimpleController as simple',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
    })

    .state('tables.datatable', {
      url: '/datatable',
      templateUrl: 'modules/tables/templates/tables-datatable.html',
      controller: 'TablesDatatableController as datatable'
    })

    .state('tables.advanced1', {
      url: '/advanced1',
      templateUrl: 'modules/tables/templates/tables-advanced1.html',
      controller: 'TablesAdvanced1Controller as advanced1'
    })

    .state('tables.facetedsearch', {
      url: '/facetedsearch',
      templateUrl: 'modules/tables/templates/tables-faceted-search.html',
      controller: 'TablesFacetedSearchController as faceted'
    });

  });

})();
