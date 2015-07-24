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
        templateUrl: 'modules/globalization/templates/globalization-overview.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.pseudo', {
        url: '/pseudolocalization',
        templateUrl: 'modules/globalization/templates/globalization-pseudolocalization.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.preferences', {
        url: '/preferences',
        templateUrl: 'modules/globalization/templates/globalization-preferences.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.strings', {
        url: '/strings',
        templateUrl: 'modules/globalization/templates/globalization-strings.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.ui', {
        url: '/uiconsiderations',
        templateUrl: 'modules/globalization/templates/globalization-uiconsiderations.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.graphics', {
        url: '/graphics',
        templateUrl: 'modules/globalization/templates/globalization-graphics.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.bidirectional', {
        url: '/bidirectional',
        templateUrl: 'modules/globalization/templates/globalization-bidirectional.html',
        controller: 'GlobalizationController as globalization'
      })

      .state('globalization.angulartranslate', {
        url: '/angulartranslate',
        templateUrl: 'modules/globalization/templates/globalization-angular-translate.html',
        controller: 'AngularTranslateController as translate'
      });

  });
})();
