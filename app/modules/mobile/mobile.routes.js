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

    .state('mobile.buttons', {
      url: '/buttons',
      templateUrl: 'modules/mobile/templates/mobile-buttons.html'
    })

    .state('mobile.uicontrols', {
      url: '/uicontrols',
      templateUrl: 'modules/mobile/templates/mobile-uicontrols.html'
    });


  });

})();
