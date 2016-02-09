(function() {

  'use strict';

  angular.module('pb.ds.hamburger').config(function($stateProvider) {
    $stateProvider.state('hamburger', {
      abstract: true,
      url: '/hamburger',
      templateUrl: 'modules/hamburger/templates/hamburger.html',
<<<<<<< f7d819aa25f0227aa9da8664def14ee5bc033900
      controller: 'HamburgerController as burger'
=======
      controller: 'SplitviewController as hamburger'
>>>>>>> Added pageslide directive & burger menu section
    })

    .state('hamburger.overview', {
      url: '/overview',
      templateUrl: 'modules/hamburger/templates/hamburger-overview.html',
      data: {
        pageTitle: 'Overview: Hamburger Menu',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('hamburger.slide', {
      url: '/slide',
      templateUrl: 'modules/hamburger/templates/hamburger-slide.html',
      data: {
        pageTitle: 'Slide Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-slide'
      }
    })

    .state('hamburger.push', {
      url: '/push',
      templateUrl: 'modules/hamburger/templates/hamburger-push.html',
      data: {
        pageTitle: 'Push Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-push'
      }
    })

    .state('hamburger.auto', {
      url: '/auto',
      templateUrl: 'modules/hamburger/templates/hamburger-auto.html',
      data: {
        pageTitle: 'Auto Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-auto'
      }
    });


  });

})();
