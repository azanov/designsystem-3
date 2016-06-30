(function () {
  'use strict';

  angular.module('pb.ds.tables').config(function ($stateProvider) {

    $stateProvider.state('tables', {
      url: '/tables',
      templateUrl: 'modules/tables/templates/abstract-tables.html',
      abstract: true
    })

    .state('tables.demo', {
      url: '/demo',
      templateUrl: 'modules/tables/templates/abstract-tables.html',
      abstract: true
    })

    .state('tables.page', {
      url: '',
      templateUrl: 'modules/tables/templates/tables.html',
      controller: 'TablesControllernew as tables',
      data: {
        pageTitle: 'Tables',
        access: 'public',
        bodyClass: 'tables'
      },
      resolve: {
        PeopleResolve: function (MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
    })

    //DEMO routes
    .state('tables.demo.paging', {
      url: '/paging',
      templateUrl: 'modules/tables/templates/demo/tables-with-paging.html',
      controller: 'TablesPagingController as tablesPaging',
      resolve: {
        PeopleResolve: function (MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Paging',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    })

    .state('tables.demo.infiniteScroll', {
      url: '/infinite-scroll',
      templateUrl: 'modules/tables/templates/demo/infinite-scroll.html',
      controller: 'InfiniteScrollController as datatable',
      resolve: {
        PeopleResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'ds_users'});
        }
      },
      data: {
        pageTitle: 'Infinite Scroll',
        access: 'public',
        bodyClass: 'tables fullscreen'
      }
    })

    .state('tables.demo.faceted', {
      url: '/faceted-search',
      templateUrl: 'modules/tables/templates/demo/faceted-search.html',
      controller: 'FacetedSearchController as faceted',
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
    })
  });
})();
