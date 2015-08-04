(function() {

  'use strict';

  angular.module('pb.ds.globalization').config(function($stateProvider) {
    $stateProvider.state('globalization', {
        // abstract: true,
        url: '/globalization',
        templateUrl: 'modules/globalization/templates/globalization.html',
        controller: 'GlobalizationController as globalization',
        data: {
          pageTitle: 'Globalization',
          access: 'public',
          bodyClass: 'globalization'
        }
      })

      .state('globalization.overview', {
        url: '/overview',
        templateUrl: 'modules/globalization/templates/globalization-process-overview.html'
      })

      .state('globalization.about', {
        url: '/about',
        templateUrl: 'modules/globalization/templates/globalization-about.html'
      })

      .state('globalization.reference', {
        url: '/reference',
        templateUrl: 'modules/globalization/templates/globalization-quick-reference.html'
      })

      .state('globalization.angulartranslate', {
        url: '/angulartranslate',
        templateUrl: 'modules/globalization/templates/globalization-angular-translate.html',
        controller: 'AngularTranslateController as translate',
        resolve: {
          translate: function($translatePartialLoader) {
            $translatePartialLoader.addPart('modules/globalization/i18n');
          },
          languages: function(languageFactory) {
            return languageFactory.get();
          }
        }
      });

  });
})();
