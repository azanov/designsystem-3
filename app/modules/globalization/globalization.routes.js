(function() {

  'use strict';

  angular.module('pb.ds.globalization').config(function($stateProvider) {
    $stateProvider.state('globalization', {
      url: '/globalization',
      templateUrl: 'modules/globalization/templates/globalization.html',
      controller: 'GlobalizationController as globalization',
      data: {
        pageTitle: 'Globalization',
        access: 'public',
        bodyClass: 'globalization'
      }
    });
  });

})();
