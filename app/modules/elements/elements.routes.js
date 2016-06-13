(function () {
  'use strict';

  angular.module('pb.ds.elements').config(function ($stateProvider) {
    $stateProvider.state('elements', {
      url: '',
      abstract: true,
      templateUrl: 'modules/elements/templates/elements.html',
      controller: 'ElementsController as elements',
      resolve: {
        NavigationResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'navigation'
          });
        }
      },
      data: {
        pageTitle: 'Elements',
        access: 'private'
      }
    })

      .state('elements.buttons', {
        url: '/buttons',
        templateUrl: 'modules/elements/templates/elements-buttons.html',
        data: {
          pageTitle: 'Buttons'
        }
      })

      .state('elements.colorcharts', {
        url: '/colorcharts',
        templateUrl: 'modules/elements/templates/elements-colors-charts.html',
        controller: 'ChartColorsController as charts',
        resolve: {
          ColorsResolve: function ($log, MockDataFactory) {
            return MockDataFactory.get({
              filename: 'colors'
            }).$promise.then(function (response) {
              return response;
            });
          }
        }
      })

      .state('elements.uibootstrap', {
        url: '/uibootstrap',
        templateUrl: 'modules/elements/templates/uibootstrap.html',
        controller: 'UiBootstrapController as uibs',
        data: {
          pageTitle: 'UI Bootstrap Directives'
        }
      })

      .state('elements.progress', {
        url: '/progress',
        templateUrl: 'modules/elements/templates/elements-progress.html',
        controller: 'ProgressController as progress'
      });
  });
})();
