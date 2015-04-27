(function() {

  'use strict';

  angular.module('pb.elements').controller('ChartColorsController', function($log, ColorsResolve) {

    var _this = this;

    _this.colorData = ColorsResolve.colors;

    _this.colors = {
      blues: {
        $blue1: _this.colorData.blues[0].hex,
        $blue2: _this.colorData.blues[1].hex,
        $blue3: _this.colorData.blues[2].hex,
        $blue4: _this.colorData.blues[3].hex,
        $blue5: _this.colorData.blues[4].hex,
        $blue6: _this.colorData.blues[5].hex,
        all: function() {
          return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
        }
      },
      grays: {
        $gray1: _this.colorData.chartgrays[0].hex,
        $gray2: _this.colorData.chartgrays[1].hex,
        $gray3: _this.colorData.chartgrays[2].hex,
        $gray4: _this.colorData.chartgrays[3].hex,
        $gray5: _this.colorData.chartgrays[4].hex,
        $gray6: _this.colorData.chartgrays[5].hex,
        all: function() {
          return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
        }
      },
      charts: {
        $green: _this.colorData.charts[0].hex,
        $blue: _this.colorData.charts[1].hex,
        $purple: _this.colorData.charts[2].hex,
        $yellow: _this.colorData.charts[3].hex,
        $orange: _this.colorData.charts[4].hex,
        $red: _this.colorData.charts[5].hex,
        all: function() {
          return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red];
        }
      }
    };

    _this.charts = {
      gray: {
        sixColor: {
          data: [50, 45, 40, 35, 30, 25],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#414141', '#4e4e4e', '#686868', '#818181', '#9b9b9b', '#c0c0c0'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 12,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 12
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: ['#414141', '#686868', '#9b9b9b'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      },
      blue: {
        sixColor: {
          data: [300, 500, 100, 200, 300, 400],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#3e53a4', '#5d71be', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          colorsAccent: ['#3e53a4', '#ef8200', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 12,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 12
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: ['#3e53a4', '#8393d0', '#afb9dd'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      },
      multi: {
        sixColor: {
          data: [300, 500, 100, 200, 300, 400],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#00B140', '#009DBF', '#A03F9B', '#EDB700', '#EF8200', '#CF0989'],
          colorsAccent: ['#3e53a4', '#ef8200', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 14,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 6
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: {
            other1: ['#00B140', '#A03F9B', '#EF8200'],
            other2: ['#009DBF', '#EDB700', '#CF0989'],
            first3: ['#00B140', '#009DBF', '#A03F9B'],
            last3: ['#EDB700', '#EF8200', '#CF0989'],
            traffic: ['#00B140', '#EDB700', '#CF0989'],
            mono: ['#3e53a4', '#8393d0', '#afb9dd']
          },
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      }
    };


  });

})();
