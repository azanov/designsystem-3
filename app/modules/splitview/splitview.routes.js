(function() {

  'use strict';

  angular.module('pb.ds.splitview').config(function($stateProvider) {
    $stateProvider.state('splitview', {
      abstract: true,
      url: '/splitview',
      templateUrl: 'modules/splitview/templates/splitview.html',
      controller: 'SplitviewController as splitview'
    })

    .state('splitview.page', {
      url: '/page',
      templateUrl: 'modules/splitview/templates/splitview-page.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: ''
      }
    })

    .state('splitview.one', {
      url: '/splitview/one',
      templateUrl: 'modules/splitview/templates/splitview-one.html',
      data: {
        pageTitle: 'Split Views - One',
        access: 'public',
        bodyClass: 'splitview splitview-one'
      }
    })

    .state('splitview.two', {
      url: '/splitview/two',
      templateUrl: 'modules/splitview/templates/splitview-two.html',
      data: {
        pageTitle: 'Split Views - Two',
        access: 'public',
        bodyClass: 'splitview splitview-two'
      }
    })

    .state('splitview.three', {
      url: '/splitview/three',
      templateUrl: 'modules/splitview/templates/splitview-three.html',
      data: {
        pageTitle: 'Split Views - Three',
        access: 'public',
        bodyClass: 'splitview splitview-three'
      }
    })

    .state('splitview.four', {
      url: '/splitview/four',
      templateUrl: 'modules/splitview/templates/splitview-four.html',
      data: {
        pageTitle: 'Split Views - Four',
        access: 'public',
        bodyClass: 'splitview splitview-four'
      }
    });


  });

})();
