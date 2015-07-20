(function() {

  'use strict';

  angular.module('pb.ds.graphs').controller('ChartjsController', function($log) {

    var _this = this;

    //COLORS
    _this.colours = [
      '#0082d5',
      '#a03f9b',
      '#00b140',
      '#edb700',
      '#ef8200',
      '#cf0989'
    ];

    //BAR
    _this.bar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      data: [
        [65, 59, 80, 81, 56, 55],
        [28, 48, 40, 19, 86, 27]
      ],
      series: ['Series A', 'Series B'],
      colours: _this.colours,
      options: {
        scaleShowGridLines: false
      },
      click: function(points, evt) {
        $log.debug(points, evt);
      }
    };

    //LINE
    _this.line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      data: [
        [65, 59, 80, 81, 56, 55],
        [28, 48, 40, 19, 86, 27]
      ],
      series: ['Series A', 'Series B'],
      colours: _this.colours,
      click: function(points, evt) {
        $log.debug(points, evt);
      }
    };

    //DONUT
    _this.donut = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
      data: [65, 59, 90, 81, 56, 55],
      colours: _this.colours
    };

    //PIE
    _this.pie = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
      data: [65, 59, 90, 81, 56, 55],
      colours: _this.colours
    };

    //RADAR
    _this.radar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
      data: [
        [65, 59, 90, 81, 56, 55],
        [28, 48, 40, 19, 96, 27]
      ],
      colours: _this.colours,
      series: ['Series A', 'Series B']
    };

    //POLAR
    _this.polar = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
      data: [65, 59, 90, 81, 56, 55],
      colours: _this.colours,
      series: ['Series A', 'Series B']
    };

  });

})();
