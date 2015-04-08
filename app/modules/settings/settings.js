(function() {

  'use strict';

  angular.module('pb.settings', ['ui.router']);

  angular.module('pb.settings').config(function($stateProvider) {
    $stateProvider.state('settings', {
      url: '/settings',
      templateUrl: 'modules/settings/templates/settings.html',
      controller: 'SettingsCtrl as sc',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/settings/i18n');
        },
        languages: function(languageFactory) {
          return languageFactory.get();
        }
      },
      data: {
        pageTitle: 'Settings',
        access: 'private'
      }
    });
  });

  // TRANSLATE CONFIG
  angular.module('pb.settings').config(function($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useLoaderCache(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/{lang}.json'
    });

    //additional parts loaded in module controllers
    $translatePartialLoaderProvider.addPart('modules/i18n');

    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');
    $translateProvider.useLocalStorage();
  });

  // DYNAMIC LOCALE CONFIG
  angular.module('pb.settings').config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

    //gulp copies the i18n locale files from bower_components to modules/i18n
    tmhDynamicLocaleProvider.localeLocationPattern('/modules/i18n/angular-i18n/angular-locale_{{locale}}.js');

  });

  angular.module('pb.settings').run(function($rootScope, $log, $translate) {

    //refresh as parts are added in controllers
    $rootScope.$on('$translatePartialLoaderStructureChanged', function() {
      $translate.refresh();
    });

  });

})();
