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

      .state('elements.containers', {
        url: '/containers',
        abstract: true,
        templateUrl: 'modules/elements/templates/elements-containers.html',
        controller: 'ContainersController as containers'
      })

      .state('elements.containers.page', {
        url: '',
        views: {
          accordions: {
            templateUrl: 'modules/elements/templates/elements-accordions.html'
          // controller: 'AccordionsController as accordions'
          },
          cards: {
            templateUrl: 'modules/elements/templates/elements-cards.html'
          },
          panels: {
            templateUrl: 'modules/elements/templates/elements-panels.html',
            controller: 'PanelsController as panels',
            resolve: {
              PeopleResolve: function ($log, MockDataFactory) {
                return MockDataFactory.query({
                  filename: 'people'
                });
              },
              MillerResolve: function ($log, MockDataFactory) {
                return MockDataFactory.get({
                  filename: 'millercolumn'
                }, function (response) {
                  return response.versionInfos;
                });
              }
            }
          },
          gallery: {
            templateUrl: 'modules/elements/templates/elements-gallery.html'
          },
          tabs: {
            templateUrl: 'modules/elements/templates/elements-tabs.html',
            controller: 'TabsController as tabs'
          },
          tiles: {
            templateUrl: 'modules/elements/templates/elements-tiles.html'
          },
          widgets: {
            templateUrl: 'modules/elements/templates/elements-widgets.html'
          }
        },
        data: {
          pageTitle: 'Containers'
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

      .state('elements.uicontrols', {
        url: '/uicontrols',
        templateUrl: 'modules/elements/templates/elements-uicontrols.html',
        controller: 'InputsController as inputs',
        resolve: {
          PeopleResolve: function ($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'people_10'
            });
          },
          CountriesResolve: function ($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'countries'
            });
          }
        },
        data: {
          pageTitle: 'UI Controls'
        }
      })

      .state('elements.uibootstrap', {
        url: '/uibootstrap',
        templateUrl: 'modules/elements/templates/uibootstrap.html',
        controller: 'UiBootstrapController as uibootstrap',
        data: {
          pageTitle: 'UI Bootstrap Directives'
        }
      })

      .state('elements.popovers', {
        url: '/popovers',
        templateUrl: 'modules/elements/templates/elements-modals-popovers.html',
        controller: 'BootstrapUiPopoverController as pop',
        data: {
          pageTitle: 'Modals and Popovers'
        }
      })

      .state('elements.progress', {
        url: '/progress',
        templateUrl: 'modules/elements/templates/elements-progress.html',
        controller: 'ProgressController as progress'
      });
  });
})();
