(function() {

  'use strict';

  angular.module('pb.ds.principles').config(function($stateProvider) {
    $stateProvider.state('principles', {
      url: '/principles',
      abstract: true,
      templateUrl: 'modules/principles/templates/principles.html',
      controller: 'PrinciplesController as principles',
      data: {
        pageTitle: 'Principles',
        access: 'public',
        bodyClass: 'principles'
      }
    })

    .state('principles.page', {
      url: '',
      views: {
        experience: {
          templateUrl: 'modules/principles/templates/principles-experience.html',
          data: {
            pageTitle: 'Principles - Experience',
            access: 'public',
            bodyClass: 'principles'
          }
        },
        design: {
          templateUrl: 'modules/principles/templates/principles-design.html',
          data: {
            pageTitle: 'Principles - Design',
            access: 'public',
            bodyClass: 'principles'
          }
        },
        brand: {
          templateUrl: 'modules/principles/templates/principles-brand.html',
          data: {
            pageTitle: 'Principles - Brand',
            access: 'public',
            bodyClass: 'principles'
          }
        }
      }
    });



  });

})();
