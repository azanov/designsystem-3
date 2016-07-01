(function () {
  'use strict';

  angular.module('pb.ds.help').config(function ($stateProvider) {
    $stateProvider.state('help', {
      url: '/help',
      templateUrl: 'modules/help/templates/help.html',
      controller: 'HelpController as help',
      data: {
        pageTitle: 'Help',
        access: 'public',
        bodyClass: 'help'
      }
    });
  });
})();
