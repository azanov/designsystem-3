(function() {

  'use strict';

  angular.module('pb.ds.principles').config(function($stateProvider) {
    $stateProvider.state('principles', {
      url: '/principles',
      templateUrl: 'modules/principles/templates/principles.html',
      controller: 'PrinciplesController as principles',
      data: {
        pageTitle: 'Principles - Design Philosophy',
        access: 'public',
        bodyClass: 'principles'
      }
    })

    .state('principles.designphilosophy', {
      url: '/designphilosophy',
      templateUrl: 'modules/principles/templates/designphilosophy.html',
      controller: 'PrinciplesController as principles',
      data: {
        pageTitle: 'Principles - Design Philosophy',
        access: 'public',
        bodyClass: 'principles'
      }
    });



  });

})();
