(function() {

  'use strict';

  angular.module('pb.ds.mobile').config(function($stateProvider) {
    $stateProvider.state('mobile', {
      url: '/mobile',
      abstract: true,
      templateUrl: 'modules/mobile/templates/mobile.html',
      controller: 'MobileController as mobile',
      data: {
        pageTitle: 'Mobile',
        access: 'public',
        bodyClass: 'mobile'
      }
    })

    //FOUNDATION
    .state('mobile.color', {
      url: '/color',
      templateUrl: 'modules/mobile/templates/mobile-color.html'
    })

    .state('mobile.typography', {
      url: '/typography',
      templateUrl: 'modules/mobile/templates/mobile-typography.html'
    })

    //ELEMENTS
    .state('mobile.buttons', {
      url: '/buttons',
      templateUrl: 'modules/mobile/templates/mobile-buttons.html'
    })

    .state('mobile.uicontrols', {
      url: '/uicontrols',
      templateUrl: 'modules/mobile/templates/mobile-uicontrols.html'
    })

    .state('mobile.containers', {
      url: '/containers',
      templateUrl: 'modules/mobile/templates/mobile-containers.html'
    })

    .state('mobile.modals-popovers', {
      url: '/modals-popovers',
      templateUrl: 'modules/mobile/templates/mobile-modals-popovers.html'
    })

    .state('mobile.lists-grids', {
      url: '/lists-grids',
      templateUrl: 'modules/mobile/templates/mobile-lists-grids.html'
    })

    .state('mobile.prototype', {
      url: '/prototype',
      templateUrl: 'modules/mobile/templates/mobile-prototype.html'
    })

    //PATTERNS
    .state('mobile.navigation', {
      url: '/navigation',
      templateUrl: 'modules/mobile/templates/mobile-navigation.html'
    });

  });

})();
