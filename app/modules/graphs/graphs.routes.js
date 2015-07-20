(function() {

  'use strict';

  angular.module('pb.ds.graphs').config(function($stateProvider) {
    $stateProvider.state('graphs', {
      abstract: true,
      url: '/graphs',
      templateUrl: 'modules/graphs/templates/graphs.html',
      controller: 'GraphsController as graphs',
      data: {
        pageTitle: 'Graphs',
        access: 'public',
        bodyClass: 'graphs'
      }
    })

    .state('graphs.morris', {
      url: '/morris',
      templateUrl: 'modules/graphs/templates/graphs-morris.html',
      controller: 'MorrisController as morris'
    })

    .state('graphs.c3', {
      url: '/c3',
      templateUrl: 'modules/graphs/templates/graphs-c3.html',
      controller: 'C3Controller as c3'
    })

    .state('graphs.chartjs', {
      url: '/chartjs',
      templateUrl: 'modules/graphs/templates/graphs-chartjs.html',
      controller: 'ChartjsController as chartjs'
    });

  });

})();
