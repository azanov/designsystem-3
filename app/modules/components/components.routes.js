(function() {

  'use strict';

  angular.module('pb.components').config(function($stateProvider) {

    $stateProvider.state('components', {
      url: '/components',
      abstract: true,
      templateUrl: 'modules/components/templates/components.html',
      controller: 'ComponentsController as components',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/components/i18n');
        }
      },
      data: {
        pageTitle: 'Components',
        access: 'private'
      }
    })

    .state('components.accordion', {
      url: '/accordion',
      templateUrl: 'modules/components/templates/components-accordion.html',
      controller: 'AccordionController as accordion'
    })

    .state('components.panels', {
      url: '/panels',
      templateUrl: 'modules/components/templates/components-panels.html',
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

    .state('components.tabs', {
      url: '/tabs',
      templateUrl: 'modules/components/templates/components-tabs.html',
      controller: 'TabsController as tabs'
    })

    .state('components.uibootstrap', {
      url: '/uibootstrap',
      templateUrl: 'modules/components/templates/components-ui-bootstrap.html',
      controller: 'UiBootstrapController as uibootstrap'
    });

  });

})();
