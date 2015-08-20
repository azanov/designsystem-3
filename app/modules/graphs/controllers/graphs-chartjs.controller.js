(function() {

  'use strict';

  angular.module('pb.ds.graphs').controller('ChartjsController', function($log) {

    var _this = this;

    //COLORS
    _this.colours = [
      '#0072B8',
      '#CF0989',
      '#009DBF',
      '#A03F9B',
      '#EF8200',
      '#00B140',
      '#EDB700',
      '#3E53A4'
    ];

    _this.mono = [
      '#00436E',
      '#005A93',
      '#0072B8',
      '#66AAD4',
      '#CCE3F1',
      '#E5F1F8'
    ];


    //BAR
    _this.bar = {
      labels: ['2011', '2012', '2013', '2014', '2015'],
      data: [
        [45, 28, 35, 85, 55],
        [65, 45, 48, 95, 75]
      ],
      series: ['Category One', 'Category Two'],
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
      labels: ['2013', '2014', '2015', '2016'],
      data: [
        [35, 60, 40, 45],
        [25, 50, 45, 60]
      ],
      series: ['Category One', 'Category Two'],
      colours: _this.colours,
      click: function(points, evt) {
        $log.debug(points, evt);
      }
    };




    //DONUT
    _this.donut = {
      labels: ['Category One', 'Category Two', 'Category Three', 'Category Four', 'Category Five'],
      data: [35, 24, 22, 12, 7]
    };

    //PIE
    _this.pie = {
      labels: ['Category One', 'Category Two', 'Category Three', 'Category Four', 'Category Five'],
      data: [35, 24, 22, 12, 7]
    };

    //RADAR
    _this.radar = {
      labels: ['Category One', 'Category Two', 'Category Three', 'Category Four', 'Category Five'],
      data: [
        [65, 59, 90, 81, 56],
        [28, 48, 40, 19, 96]
      ],
      colours: _this.colours,
      series: ['2014', '2015']
    };

    //POLAR
    _this.polar = {
      labels: ['Category One', 'Category Two', 'Category Three', 'Category Four', 'Category Five'],
      data: [65, 59, 90, 81, 56],
      colours: _this.colours,
      series: ['2014', '2015']
    };

  });

})();
