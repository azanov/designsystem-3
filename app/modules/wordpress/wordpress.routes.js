(function() {

  'use strict';

  angular.module('pb.ds.wordpress').config(function($stateProvider) {
    $stateProvider.state('wordpress', {
      url: '/wordpress',
      templateUrl: 'modules/wordpress/templates/wordpress.html',
      controller: 'WordpressController as wordpress',
      data: {
        pageTitle: 'Wordpress',
        access: 'public',
        bodyClass: 'wordpress'
      }
    });
  });

})();
