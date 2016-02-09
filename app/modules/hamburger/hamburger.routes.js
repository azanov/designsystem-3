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
        pageTitle: 'Full-Time Hamburger Menu - Overview',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('hamburger.one', {
      url: '/hamburger/one',
      templateUrl: 'modules/hamburger/templates/hamburger-one.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-filled'
      }
    })

    .state('hamburger.two', {
      url: '/hamburger/two',
      templateUrl: 'modules/hamburger/templates/hamburger-two.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-white'
      }
    })

    .state('hamburger.three', {
      url: '/hamburger/three',
      templateUrl: 'modules/hamburger/templates/hamburger-three.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu - three',
        access: 'public',
        bodyClass: 'hamburger hamburger-white-filled'
      }
    })

    .state('hamburger.four', {
      url: '/hamburger/four',
      templateUrl: 'modules/hamburger/templates/hamburger-four.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu - Four',
        access: 'public',
        bodyClass: 'hamburger hamburger-white-open'
      }
    })

    .state('hamburger.five', {
      url: '/hamburger/five',
      templateUrl: 'modules/hamburger/templates/hamburger-five.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-white-open'
      }
    })

    .state('hamburger.six', {
      url: '/hamburger/six',
      templateUrl: 'modules/hamburger/templates/hamburger-six.html',
      data: {
        pageTitle: 'Full-Time Hamburger Menu',
        access: 'public',
        bodyClass: 'hamburger hamburger-white-open'
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
