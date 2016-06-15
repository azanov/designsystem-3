(function () {
  'use strict';

  angular.module('pb.ds.charts').config(function ($stateProvider) {
    $stateProvider.state('charts', {
      abstract: true,
      url: '/charts',
      templateUrl: 'modules/charts/templates/charts.html',
      controller: 'ChartsController as charts',
      data: {
        pageTitle: 'Charts',
        access: 'public',
        bodyClass: 'charts'
      }
    })

      .state('charts.page', {
        url: '',
        views: {
          colors: {
            templateUrl: 'modules/charts/templates/charts-colors.html'
          },
          c3charts: {
            templateUrl: 'modules/charts/templates/charts-c3.html',
            controller: 'C3Controller as c3'
          },
          chartjs: {
            templateUrl: 'modules/charts/templates/charts-chartjs.html',
            controller: 'ChartjsController as chartjs'
          }
        }
      });

      // .state('charts.morris', {
      //   url: '/morris',
      //   templateUrl: 'modules/charts/templates/charts-morris.html',
      //   controller: 'MorrisController as morris'
      // })
  });
})();
