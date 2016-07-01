(function () {
  'use strict';

  angular.module('pb.ds.charts').controller('ChartsController', function ($log) {
    var _this = this;

    _this.chartColors = [
      {
        name: 'PB Med blue',
        sass: '$pb-medium-blue',
        hex: '#0072b8'
      },
      {
        name: 'PB Magenta',
        sass: '$pb-magenta',
        hex: '#cf0989'
      },
      {
        name: 'PB Cyan',
        sass: '$pb-cyan',
        hex: '#009dbf'
      },
      {
        name: 'PB Purple',
        sass: '$pb-purple',
        hex: '#a03f9b'
      },
      {
        name: 'PB Orange',
        sass: '$pb-orange',
        hex: '#ef8200'
      },
      {
        name: 'PB Dark Green',
        sass: '$pb-dark-green',
        hex: '#00a740'
      },
      {
        name: 'PB Yellow',
        sass: '$pb-yellow',
        hex: '#edb700'
      },
      {
        name: 'PB Blue',
        sass: '$pb-blue',
        hex: '#3e53a4'
      }
    ];
    _this.chartTints = [
      { name: '900', hex: '#00436e' },
      { name: '700', hex: '#005a93' },
      { name: '500', hex: '#0072b8' },
      { name: '300', hex: '#66aad4' },
      { name: '100', hex: '#cce3f1' },
      { name: '50', hex: '#e5f1f8' }
    ];
  });
})();
