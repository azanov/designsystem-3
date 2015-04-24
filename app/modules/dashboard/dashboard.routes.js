(function() {

  'use strict';

  angular.module('pb.dashboard', [
    'ui.router'
  ]);

  angular.module('pb.dashboard').config(function($stateProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl as dash',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/dashboard/i18n');
        },
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Dashboard',
        access: 'public',
        bodyclass: 'home'
      }
    });
  });

})();
