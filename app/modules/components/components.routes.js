(function() {

  'use strict';

  angular.module('pb.components').config(function($stateProvider) {

    $stateProvider.state('components', {
      url: '/components',
      abstract: true,
      templateUrl: 'modules/components/templates/components.html',
      controller: 'ComponentsController as components',
      data: {
        pageTitle: 'Components',
        access: 'private'
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
