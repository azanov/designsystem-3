/* jshint strict:false */

var app = angular.module('app', [
  'ngCookies',
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'angular-loading-bar',
  'pascalprecht.translate',
  'tmh.dynamicLocale',
  'selectize-ng',
  'toggle-switch',
  'pb.dashboard',
  'pb.components',
  'pb.elements',
  'pb.settings',
  'pb.signin'
]);

//debugging
app.config(function($logProvider, config) {
  $logProvider.debugEnabled(config.debug);
});

// UI ROUTER CONFIG
app.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('otherwise', {
    url: '*path',
    template: '',
    controller: function($state) {
      $state.go('dashboard');
    }
  });
}]);

app.run([
  '$rootScope',
  '$state',
  '$stateParams',
  '$log',
  function($rootScope, $state, $stateParams, $log) {

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

  }
]);
