(function() {

  'use strict';

  angular.module('pb.ds.splitview').config(function($stateProvider) {
    $stateProvider.state('splitview-examples', {
      url: '/splitview',
      templateUrl: 'modules/splitview/templates/splitview-one.html',
      controller: 'SplitviewController as splitview',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
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
    });










  });

})();
