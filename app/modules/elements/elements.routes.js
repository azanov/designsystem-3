(function() {

  'use strict';

  angular.module('pb.elements').config(function($stateProvider) {
    $stateProvider.state('elements', {
      url: '/elements',
      abstract: true,
      templateUrl: 'modules/elements/templates/elements.html',
      controller: 'ElementsController as elements',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/elements/i18n');
        },
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Elements',
        access: 'private'
      }
    })

    .state('elements.alerts', {
      url: '/alerts',
      templateUrl: 'modules/elements/templates/elements-alerts.html',
      controller: 'AlertsController as alerts'
    })

    .state('elements.buttons', {
      url: '/buttons',
      templateUrl: 'modules/elements/templates/elements-buttons.html'
    })

    .state('elements.colors', {
      url: '/colors',
      templateUrl: 'modules/elements/templates/elements-colors.html',
      controller: 'ColorsController as colors',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      }
    })

    .state('elements.colorusage', {
      url: '/colorusage',
      templateUrl: 'modules/elements/templates/elements-colors-usage.html',
      controller: 'ColorUsageController as usage'
    })

    .state('elements.colorcharts', {
      url: '/colorcharts',
      templateUrl: 'modules/elements/templates/elements-colors-charts.html',
      controller: 'ChartColorsController as charts',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      }
    })

    .state('elements.grid', {
      url: '/grid',
      templateUrl: 'modules/elements/templates/elements-grid.html'
    })

    .state('elements.icons', {
      url: '/icons',
      templateUrl: 'modules/elements/templates/elements-icons.html',
      controller: 'IconsController as icons',
      resolve: {
        IconsResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'fontawesome'});
        }
      }
    })

    .state('elements.inputs', {
      url: '/inputs',
      templateUrl: 'modules/elements/templates/elements-inputs.html',
      controller: 'InputsController as inputs',
      resolve: {
        CountriesResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'countries'});
        }
      }
    })

    .state('elements.popovers', {
      url: '/popovers',
      templateUrl: 'modules/elements/templates/elements-popovers.html'
    })

    .state('elements.progress', {
      url: '/progress',
      templateUrl: 'modules/elements/templates/elements-progress.html',
      controller: 'ProgressController as progress'
    })

    .state('elements.tables', {
      url: '/tables',
      templateUrl: 'modules/elements/templates/elements-tables.html',
      controller: 'TablesController as tables',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
    })
    
    .state('elements.typography', {
      url: '/typography',
      templateUrl: 'modules/elements/templates/elements-typography.html'
    });
  });

})();
