(function() {

  'use strict';

  angular.module('pb.elements').config(function($stateProvider) {
    $stateProvider.state('elements', {
      url: '/elements',
      abstract: true,
      templateUrl: 'modules/elements/templates/elements.html',
      controller: 'ElementsController as elements',
      resolve: {
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
      controller: 'ElementsAlertsController as alerts'
    })

    .state('elements.buttons', {
      url: '/buttons',
      templateUrl: 'modules/elements/templates/elements-buttons.html'
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
    });



  });

})();
