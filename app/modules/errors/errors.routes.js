(function() {

  'use strict';

  angular.module('pb.ds.errors').config(function($stateProvider) {
    $stateProvider.state('errors', {
      url: '/errors',
      templateUrl: 'modules/errors/templates/errors-template.html',
      controller: 'ErrorsController as errors',
      abstract: true,
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'errors'
      }
    })
    .state('errors-404-left', {
      url: '/errors/404-left',
      templateUrl: 'modules/errors/templates/errors-404-left.html',
      data: {
        pageTitle: 'Landing Pages',
        access: 'public',
        bodyClass: 'errors errors-404'
      }
    });



  });

})();
