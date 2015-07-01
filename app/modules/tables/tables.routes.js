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
      controller: 'TablesSimpleController as simple'
    })

    .state('tables.datatable', {
      url: '/datatable',
      templateUrl: 'modules/tables/templates/tables-datatable.html'
    })

    .state('tables.datatable.overview', {
      url: '/datatable/overview',
      templateUrl: 'modules/tables/templates/tables-datatable-overview.html'
    })

    .state('tables.datatable.toolbar', {
      url: '/datatable/toolbar',
      templateUrl: 'modules/tables/templates/tables-datatable-toolbar.html'
    })

    .state('tables.datatable.tabbed', {
      url: '/datatable/tabbed',
      templateUrl: 'modules/tables/templates/tables-datatable-tabbed.html'
    })

    .state('tables.datatable.data', {
      url: '/datatable/data',
      templateUrl: 'modules/tables/templates/tables-datatable-data.html'
    })

    .state('tables.datatable.paging', {
      url: '/datatable/paging',
      templateUrl: 'modules/tables/templates/tables-datatable-paging.html',
      controller: 'TablesDatatableController as datatable',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
    })

    .state('tables.datatable.infiniteScroll', {
      url: '/datatable/infiniteScroll',
      templateUrl: 'modules/tables/templates/tables-datatable-infinite-scroll.html',
      controller: 'TablesDatatableInfiniteScrollController as datatable',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
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
