(function () {
  'use strict';

  angular.module('pb.ds.strategy').config(function ($stateProvider) {
    $stateProvider.state('strategy', {
      url: '/strategy',
      templateUrl: 'modules/strategy/strategy.html',
      // abstract: true,
      controller: 'StrategyController as strategy',
      data: {
        pageTitle: 'Strategy'
      }
    });
  });
})();
