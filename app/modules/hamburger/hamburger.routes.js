(function() {

  'use strict';

  angular.module('pb.ds.hamburger').config(function($stateProvider) {
    $stateProvider.state('hamburger', {
      abstract: true,
      url: '/hamburger',
      templateUrl: 'modules/hamburger/templates/hamburger.html',
      controller: 'HamburgerController as burger'
    })

    .state('hamburger.overview', {
      url: '/overview',
      templateUrl: 'modules/hamburger/templates/hamburger-overview.html',
      data: {
        pageTitle: 'Hamburger Menu - Overview',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('hamburger.slide', {
      url: '/slide',
      templateUrl: 'modules/hamburger/templates/hamburger-slide.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'hamburger hamburger-slide'
      }
    });


  });

})();
