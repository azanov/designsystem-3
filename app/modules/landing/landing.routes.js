(function() {

  'use strict';

  angular.module('pb.ds.landing').config(function($stateProvider) {
    $stateProvider.state('landing', {
      url: '/landing',
      templateUrl: 'modules/landing/templates/landing.html',
      controller: 'LandingController as dash',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'landing'
      }
    });
  });

})();
