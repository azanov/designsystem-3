(function() {

  'use strict';

  angular.module('pb.elements').controller('ChartColorsController', function($scope, $log) {

    $scope.charts = {
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
