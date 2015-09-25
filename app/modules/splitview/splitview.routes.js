(function() {

  'use strict';

  angular.module('pb.ds.splitview').config(function($stateProvider) {
    $stateProvider.state('splitview', {
      url: '/splitview',
      templateUrl: 'modules/splitview/templates/splitview-bgphoto.html',
      controller: 'SplitviewController as splitview',
      resolve: {
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview'
      }
    })
    .state('splitview-bgphoto', {
      url: '/splitview/bg-image',
      templateUrl: 'modules/splitview/templates/splitview-bgphoto.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-bgImg'
      }
    })
    .state('splitview-threeCol', {
      url: '/splitview/threeCol',
      templateUrl: 'modules/splitview/templates/splitview-threeCol.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-threeCol'
      }
    })
    .state('splitview-form', {
      url: '/splitview/form',
      templateUrl: 'modules/splitview/templates/splitview-form.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-form'
      }
    })
    .state('splitview-product', {
      url: '/splitview/product',
      templateUrl: 'modules/splitview/templates/splitview-product.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-product'
      }
    })
    .state('splitview-info', {
      url: '/splitview/info',
      templateUrl: 'modules/splitview/templates/splitview-info.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-info'
      }
    })
    .state('splitview-slider', {
      url: '/splitview/slider',
      templateUrl: 'modules/splitview/templates/splitview-slider.html',
      data: {
        pageTitle: 'Split Views',
        access: 'public',
        bodyClass: 'splitview splitview-slider'
      }
    });
  });

})();
