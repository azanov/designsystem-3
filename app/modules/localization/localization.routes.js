(function() {

  'use strict';

  angular.module('pb.ds.localization').config(function($stateProvider) {
    $stateProvider.state('localization', {
      url: '/localization',
      templateUrl: 'modules/localization/templates/localization.html',
      controller: 'LocalizationController as localization',
      data: {
        pageTitle: 'Localization',
        access: 'public',
        bodyClass: 'localization'
      }
    });
  });

})();
