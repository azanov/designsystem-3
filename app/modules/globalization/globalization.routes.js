;(function () {
  'use strict'

  angular.module('pb.ds.globalization').config(function ($stateProvider) {
    $stateProvider.state('globalization', {
      abstract: true,
      url: '/globalization',
      templateUrl: 'modules/globalization/templates/globalization.html',
      controller: 'GlobalizationController as globalization',
      data: {
        pageTitle: 'Globalization',
        access: 'public',
        bodyClass: 'globalization'
      }
    })

      .state('globalization.page', {
        url: '',
        views: {
          overview: {
            templateUrl: 'modules/globalization/templates/globalization-process-overview.html'
          },
          about: {
            templateUrl: 'modules/globalization/templates/globalization-about.html'
          },
          reference: {
            templateUrl: 'modules/globalization/templates/globalization-quick-reference.html'
          },
          angularjs: {
            templateUrl: 'modules/globalization/templates/globalization-angular-translate.html',
            controller: 'AngularTranslateController as translate',
            resolve: {
              translate: function ($translatePartialLoader, $translate) {
                $translatePartialLoader.addPart('modules/globalization/i18n')
                return $translate.refresh() // returns a promise see https://github.com/angular-translate/angular-translate/issues/197
              },
              languages: function (languageFactory) {
                return languageFactory.get()
              }
            }
          }
        }
      })
  })
})()
