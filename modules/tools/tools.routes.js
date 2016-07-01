(function () {
  'use strict';

  angular.module('pb.ds.tools').config(function ($stateProvider) {
    $stateProvider.state('tools', {
      url: '/tools',
      templateUrl: 'modules/tools/tools.html',
      // abstract: true,
      controller: 'ToolsController as tools',
      data: {
        pageTitle: 'Tools'
      }
    });
  });
})();
