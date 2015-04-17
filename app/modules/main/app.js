(function() {

  'use strict';

  angular.module('app', [
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'angular-loading-bar',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'selectize-ng',
    'toggle-switch',
    'ui.bootstrap',
    'ui-rangeSlider',
    'chart.js',
    'pb.dashboard',
    'pb.components',
    'pb.elements',
    'pb.settings',
    'pb.signin'
  ]);

  //debugging
  angular.module('app').config(function($logProvider, config) {
    $logProvider.debugEnabled(config.debug);
  });

  // UI ROUTER CONFIG
  angular.module('app').config(function($stateProvider) {
    $stateProvider.state('otherwise', {
      url: '*path',
      template: '',
      controller: function($state) {
        $state.go('dashboard');
      }
    });
  });

  angular.module('app').run(function($rootScope, $state, $stateParams, $log) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $log.debug(
        'To State:', toState,
        'From state:', fromState
      );

      if (!toState || !toState.data) {
        return;
      }

    });

    $rootScope.$on('$stateChangeError', function(event, toState, tpParams, fromState, fromParams, error) {
      $log.debug('$stateChangeError: ', error);
    });

    $rootScope.$on('$stateNotFound', function(unfoundState) {
      $log.debug('$stateNotFound: ', unfoundState);
    });

  });

})();
