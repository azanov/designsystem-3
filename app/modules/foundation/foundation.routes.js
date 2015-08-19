(function() {

  'use strict';

  angular.module('pb.ds.foundation').config(function($stateProvider) {
    $stateProvider.state('foundation', {
      abstract: true,
      url: '/foundation',
      templateUrl: 'modules/foundation/templates/foundation.html',
      controller: 'foundationController as foundation',
      data: {
        pageTitle: 'foundation',
        access: 'public',
        bodyClass: 'foundation'
      }
    })



    .state('foundation.color', {
      url: '/color',
      templateUrl: 'modules/foundation/templates/foundation-color.html',
      controller: 'ColorsController as colors',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      },
      data: {
        pageTitle: 'foundation - Colors'
      }
    })

    .state('foundation.chartcolors', {
      url: '/chartcolors',
      templateUrl: 'modules/foundation/templates/foundation-chartcolors.html',
      controller: 'ColorsController as colors',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      },
      data: {
        pageTitle: 'Foundation - Chart Colors'
      }
    })

    .state('foundation.typography', {
      url: '/typography',
      templateUrl: 'modules/foundation/templates/foundation-typography.html',
      controller: 'TypographyController as type',
      data: {
        pageTitle: 'foundation - Typography'
      }
    })

    .state('foundation.grid', {
      url: '/font',
      templateUrl: 'modules/foundation/templates/foundation-grid.html',
      data: {
        pageTitle: 'Foundation - Grid'
      }
    })

    .state('foundation.writing', {
      url: '/writing',
      templateUrl: 'modules/foundation/templates/foundation-writing.html',
      controller: 'WritingController as writing',
      data: {
        pageTitle: 'Foundation - Writing'
      }
    })

    .state('foundation.font', {
      url: '/font',
      templateUrl: 'modules/foundation/templates/foundation-font.html',
      controller: 'FontController as font',
      data: {
        pageTitle: 'foundation - Font'
      }
    });

  });

})();
