(function() {

  'use strict';

  angular.module('pb.ds.hamburger', ['ui.router']);


  // UI ROUTER CONFIG
  angular.module('app').config(function($stateProvider) {
    $stateProvider.state('hamburger.push', {
        url: '/push',
        templateUrl: 'templates/hamburger_push.html',
        controller: 'HamburgerController as burger',
        data: {
          pageTitle: 'Web',
          access: 'public',
          bodyClass: 'web sectionlanding'
        }
      })
      .state('otherwise2', {
        url: '*path',
        template: '',
        controller: function($state) {
          $state.go('hamburger.push');
        }
      });
  });

})();
