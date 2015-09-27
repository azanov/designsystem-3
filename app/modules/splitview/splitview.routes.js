(function() {

  'use strict';

  angular.module('pb.ds.splitview').config(function($stateProvider) {
    $stateProvider.state('splitview-examples', {
      url: '/splitview',
      templateUrl: 'modules/splitview/templates/splitview-one.html',
      controller: 'SplitviewController as splitview',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'dummynav'});
        }
      },
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    })
    .state('splitview-one', {
      url: '/splitview/one',
      templateUrl: 'modules/splitview/templates/splitview-one.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    })
    .state('splitview-two', {
      url: '/splitview/two',
      templateUrl: 'modules/splitview/templates/splitview-two.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    })
    .state('splitview-three', {
      url: '/splitview/three',
      templateUrl: 'modules/splitview/templates/splitview-three.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    })
    .state('splitview-four', {
      url: '/splitview/four',
      templateUrl: 'modules/splitview/templates/splitview-four.html',
      controller: 'SplitviewController as splitview',
      resolve: {
        DummyNavResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'dummynav'});
        }
      },
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    });










  });

})();
