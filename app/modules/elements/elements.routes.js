(function() {

  'use strict';

  angular.module('pb.ds.elements').config(function($stateProvider) {
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

    .state('elements.buttons', {
      url: '/elements/buttons',
      templateUrl: 'modules/elements/templates/elements-buttons.html'
    })

    .state('elements.accordion', {
      url: '/elements/accordion',
      templateUrl: 'modules/elements/templates/elements-accordion.html',
      controller: 'AccordionController as accordion'
    })

    .state('elements.colorcharts', {
      url: '/elements/colorcharts',
      templateUrl: 'modules/elements/templates/elements-colors-charts.html',
      controller: 'ChartColorsController as charts',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      }
    })

    .state('elements.grid', {
      url: '/elements/grid',
      templateUrl: 'modules/elements/templates/elements-grid.html'
    })

    .state('elements.icons', {
      url: '/elements/icons',
      templateUrl: 'modules/elements/templates/elements-icons.html',
      controller: 'IconsController as icons',
      resolve: {
        IconsResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'fontawesome'});
        }
      }
    })

    .state('elements.inputs', {
      url: '/elements/inputs',
      templateUrl: 'modules/elements/templates/elements-inputs.html',
      controller: 'InputsController as inputs',
      resolve: {
        CountriesResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'countries'});
        }
      }
    })

    .state('elements.panels', {
      url: '/elements/panels',
      templateUrl: 'modules/elements/templates/elements-panels.html',
      controller: 'PanelsController as panels',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        },
        MillerResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'millercolumn'}, function(response) {
            return response.versionInfos;
          });
        }
      }
    })

    .state('elements.popovers', {
      url: '/elements/popovers',
      templateUrl: 'modules/elements/templates/elements-popovers.html'
    })

    .state('elements.progress', {
      url: '/elements/progress',
      templateUrl: 'modules/elements/templates/elements-progress.html',
      controller: 'ProgressController as progress'
    })


      .state('elements.tabs', {
        url: '/elements/tabs',
        templateUrl: 'modules/elements/templates/elements-tabs.html',
        controller: 'TabsController as tabs'
      });




  });

})();
