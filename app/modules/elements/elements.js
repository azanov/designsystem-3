(function() {

  'use strict';

  angular.module('pb.elements', ['ui.router']);

  angular.module('pb.elements').config(function($stateProvider) {
    $stateProvider.state('elements', {
      url: '/elements',
      abstract: true,
      templateUrl: 'modules/elements/templates/elements.html',
      controller: 'ElementsCtrl as ec',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/elements/i18n');
        },
        navigation: function(navigation) {
          return navigation.getSubNav('Elements');
        }
      },
      data: {
        pageTitle: 'Elements',
        access: 'private'
      }
    })
    .state('elements.alerts', {
      url: '/alerts',
      templateUrl: 'modules/elements/templates/elements.alerts.html',
      controller: 'AlertsCtrl as ac'
    })
    .state('elements.buttons', {
      url: '/buttons',
      templateUrl: 'modules/elements/templates/elements.buttons.html'
    })
    .state('elements.colors', {
      url: '/colors',
      templateUrl: 'modules/elements/templates/elements.colors.html',
      controller: 'ColorsController',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'}, function(response) {
            return response;
          });
        }
      }
    })

    .state('elements.colorusage', {
      url: '/colorusage',
      templateUrl: 'modules/elements/templates/elements.colorusage.html',
      controller: 'ColorsController'
    })
    
    .state('elements.colorcharts', {
      url: '/colorcharts',
      templateUrl: 'modules/elements/templates/elements.colorcharts.html',
      controller: 'ChartColorsController'

    })
    .state('elements.grid', {
      url: '/grid',
      templateUrl: 'modules/elements/templates/elements.grid.html'
    })
    .state('elements.icons', {
      url: '/icons',
      templateUrl: 'modules/elements/templates/elements.icons.html',
      controller: 'IconsController as icons',
      resolve: {
        IconsResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'fontawesome'}, function(response) {
            return response;
          });
        }
      }
    })
    .state('elements.inputs', {
      url: '/inputs',
      templateUrl: 'modules/elements/templates/elements.inputs.html',
      controller: 'InputsCtrl as ic',
      resolve: {
        countriesList: function(countries) {
          return countries.get();
        }
      }
    })

    .state('elements.popovers', {
      url: '/popovers',
      templateUrl: 'modules/elements/templates/elements.popovers.html'
    })

    .state('elements.progress', {
      url: '/progress',
      templateUrl: 'modules/elements/templates/elements.progress.html',
      controller: 'ProgressCtrl as pc'
    })

    .state('elements.tables', {
      url: '/tables',
      templateUrl: 'modules/elements/templates/elements.tables.html',
      controller: 'TablesCtrl as tc',
      resolve: {
        peopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'}, function(response) {
            return response;
          });
        }
      }
    })
    .state('elements.typography', {
      url: '/typography',
      templateUrl: 'modules/elements/templates/elements.typography.html'
    });
  });

})();
