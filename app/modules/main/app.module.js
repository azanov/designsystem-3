(function() {

  'use strict';

  angular.module('app', [

    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.dashboard',
    'pb.ds.elements',
    'pb.ds.forms',
    'pb.ds.foundation',
    'pb.ds.globalization',
    'pb.ds.graphs',
    'pb.ds.helpers',
    'pb.ds.mobile',
    'pb.ds.feedback',
    'pb.ds.patterns',
    'pb.ds.principles',
    'pb.ds.resources',
    'pb.ds.tables',
    'pb.ds.wordpress',
    'pb.ds.writing',
    'pb.settings'
  ]);

  //angular scroll configuration
  angular.module('app').value('duScrollDuration', 750);
  angular.module('app').value('duScrollOffset', 125);

  //configure debugging
  angular.module('app').config(function($logProvider, config) {
    $logProvider.debugEnabled(config.debug);
  });

  //configure production mode
  angular.module('app').config(function($compileProvider, config) {
    $compileProvider.debugInfoEnabled(config.debug);
  });

  //ui-bootstrap tooltip
  angular.module('app').config(function($tooltipProvider) {
    $tooltipProvider.options({
      appendToBody: true
    });
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

  // highlight.js configuration
  angular.module('app').config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      languages: ['html', 'css', 'js', 'xml', 'json']
    });
  });


  // TRANSLATE CONFIG
  angular.module('app').config(function($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useLoaderCache(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/{lang}.json'
    });

    //additional parts loaded in module controllers
    //$translatePartialLoaderProvider.addPart('modules/i18n');

    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');
    $translateProvider.useLocalStorage();

    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  });

  // DYNAMIC LOCALE CONFIG
  angular.module('app').config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

    //gulp copies the i18n locale files from bower_components to modules/i18n
    tmhDynamicLocaleProvider.localeLocationPattern('modules/i18n/angular-i18n/angular-locale_{{locale}}.js');

  });




  angular.module('app').run(function($rootScope, $state, $stateParams, $log, $translate, $anchorScroll, $location) {


    //refresh as parts are added in controllers
    $rootScope.$on('$translatePartialLoaderStructureChanged', function() {
      $translate.refresh();
    });


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

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      //if ($location.hash()) {$anchorScroll();}
    });

    $rootScope.$on('$routeChangeStart', function(newRoute, oldRoute) {
      //if ($location.hash()) {$anchorScroll();}
    });

    //scroll to top of the page, this makes the transitions wonky and needs more research
    $rootScope.$on('$stateChangeSuccess', function() {
      //document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

  });



})();
