(function() {

  'use strict';

  angular.module('pb.ds.mobile').config(function($stateProvider) {
    $stateProvider.state('mobile', {
      url: '/mobile',
      templateUrl: 'modules/mobile/templates/mobile.html',
      controller: 'MobileController as mobile',
      data: {
        pageTitle: 'Mobile',
        access: 'public',
        bodyClass: 'mobile'
      }
    })


  });

})();
