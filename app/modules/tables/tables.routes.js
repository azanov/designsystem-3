(function () {
  'use strict';

  angular.module('pb.ds.tables').config(function ($stateProvider) {
    $stateProvider.state('tables', {
      abstract: true,
      url: '/tables',
      templateUrl: 'modules/tables/templates/tables.html'
    })

      .state('tables.page', {
        url: '',
        views: {
          basic: {
            templateUrl: 'modules/tables/templates/tables-basic.html',
            controller: 'TablesSimpleController as simple',
            resolve: {
              PeopleResolve: function ($log, MockDataFactory) {
                return MockDataFactory.query({filename: 'people'});
              }
            }
          },
          overview: {
            templateUrl: 'modules/tables/templates/tables-overview.html',
            controller: 'TablesOverviewController as overview'
          },
          toolbar: {
            templateUrl: 'modules/tables/templates/tables-toolbar.html'
          },
          data: {
            templateUrl: 'modules/tables/templates/tables-data.html',
            controller: 'TablesDataController as data'
          },
          tabbed: {
            templateUrl: 'modules/tables/templates/tables-tabbed.html'
          }
        }
      })

      .state('tables.paging', {
        url: '/datatable/paging',
        templateUrl: 'modules/tables/templates/tables-popup-paging.html',
        controller: 'TablesDatatableController as datatable',
        resolve: {
          PeopleResolve: function ($log, MockDataFactory) {
            return MockDataFactory.query({filename: 'ds_users'});
          }
        },
        data: {
          pageTitle: 'Paging',
          access: 'public',
          bodyClass: 'tables'
        }
      })

      .state('tables.infiniteScroll', {
        url: '/datatable/infiniteScroll',
        templateUrl: 'modules/tables/templates/tables-popup-infinite-scroll.html',
        controller: 'TablesDatatableInfiniteScrollController as datatable',
        resolve: {
          PeopleResolve: function ($log, MockDataFactory) {
            return MockDataFactory.query({filename: 'ds_users'});
          }
        },
        data: {
          pageTitle: 'Infinite Scroll',
          access: 'public',
          bodyClass: 'tables infinite-scroll'
        }
      })

      // .state('tables.datatablesnet', {
      //   url: '/datatablesnet',
      //   templateUrl: 'modules/tables/templates/tables-datatables.net.html',
      //   controller: 'TablesDatatablesNetController as datatablesnet',
      //   resolve: {
      //     PeopleResolve: function ($log, MockDataFactory) {
      //       return MockDataFactory.query({filename: 'ds_users'})
      //     }
      //   },
      //   data: {
      //     pageTitle: 'Datatables.net',
      //     access: 'public',
      //     bodyClass: 'tables fullscreen'
      //   }
      // })

      .state('tables.facetedsearch', {
        url: '/facetedsearch',
        templateUrl: 'modules/tables/templates/tables-popup-faceted-search.html',
        controller: 'TablesFacetedSearchController as faceted',
        resolve: {
          PeopleResolve: function ($log, MockDataFactory) {
            return MockDataFactory.query({filename: 'ds_users'});
          }
        },
        data: {
          pageTitle: 'Faceted Search',
          access: 'public',
          bodyClass: 'splitview splitview-white-open'
        }
      });
  });
})();
