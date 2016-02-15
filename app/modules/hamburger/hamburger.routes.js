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
        pageTitle: 'Full-Time Hamburger Menu - Overview',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('hamburger.seven', {
      url: '/hamburger/seven',
      templateUrl: 'modules/hamburger/templates/hamburger-seven.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-white-open'
      }
    });


  });

})();
