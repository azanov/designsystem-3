(function() {

  'use strict';

  angular.module('app', [

    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.dashboard',
    'pb.components',
    'pb.elements',
    'pb.settings',
    'pb.ds.pages',
    'pb.ds.tables',
    'pb.ds.notification',
    'pb.ds.graphs',
    'pb.ds.localization',
    'pb.ds.brand',
    'pb.ds.helpers'
  ]);

  //configure debugging
  angular.module('app').config(function($logProvider, config) {
    $logProvider.debugEnabled(config.debug);
  });

  //configure production mode
  angular.module('app').config(function($compileProvider, config) {
    $compileProvider.debugInfoEnabled(config.debug);
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
