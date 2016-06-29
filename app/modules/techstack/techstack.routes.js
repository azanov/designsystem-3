(function () {
  'use strict';

  angular.module('pb.ds.techstack').config(function ($stateProvider) {
    $stateProvider.state('techstack', {
      url: '/techstack',
      templateUrl: 'modules/techstack/techstack.html',
      controller: 'TechstackController as tech',
      data: {
        pageTitle: 'Tech Stack',
        access: 'public',
        bodyClass: 'techstack'
      }
    });
  });
})();
