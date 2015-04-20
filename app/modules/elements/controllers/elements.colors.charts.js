(function() {

  'use strict';

  angular.module('pb.elements').controller('ChartColorsCtrl', function($scope, $log, ColorFactory) {

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

    $scope.colorData = {};

    ColorFactory.getColors().then(function(response) {
      $scope.colorData = response.colors;
      //init();
    });

    // function init() {
    //     // convert colors from json to named variables
    //     $scope.colors = {
    //       blues: {
    //         $blue1: $scope.colorData.blues[0].hex,
    //         $blue2: $scope.colorData.blues[1].hex,
    //         $blue3: $scope.colorData.blues[2].hex,
    //         $blue4: $scope.colorData.blues[3].hex,
    //         $blue5: $scope.colorData.blues[4].hex,
    //         $blue6: $scope.colorData.blues[5].hex,
    //         all: function() {
    //           return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
    //         }
    //       },
    //       grays: {
    //         $gray1: $scope.colorData.chartgrays[0].hex,
    //         $gray2: $scope.colorData.chartgrays[1].hex,
    //         $gray3: $scope.colorData.chartgrays[2].hex,
    //         $gray4: $scope.colorData.chartgrays[3].hex,
    //         $gray5: $scope.colorData.chartgrays[4].hex,
    //         $gray6: $scope.colorData.chartgrays[5].hex,
    //         all: function() {
    //           return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
    //         }
    //       },
    //       charts: {
    //         $green: $scope.colorData.charts[0].hex,
    //         $blue: $scope.colorData.charts[1].hex,
    //         $purple: $scope.colorData.charts[2].hex,
    //         $yellow: $scope.colorData.charts[3].hex,
    //         $orange: $scope.colorData.charts[4].hex,
    //         $red: $scope.colorData.charts[5].hex,
    //         all: function() {
    //           return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red];
    //         }
    //       }
    //     };
    //
    //   } //end init
    //
    // // functions that create the charts
    //
    // //generate easypiechart
    // $scope.easypiechart = function(size, barColor, lineWidth, percent) {
    //   var config = {
    //     options: {
    //       animate: {
    //         enabled: false
    //       },
    //       size: size,
    //       barColor: barColor,
    //       scaleColor: false,
    //       lineWidth: lineWidth,
    //       lineCap: 'circle',
    //       trackColor: '#f2f2f2'
    //     },
    //     percent: percent
    //   };
    //
    //   return config;
    // };
    //
    // //generate flot donut chart
    // $scope.donut = function(data, colors, innerRadius) {
    //   var config = {
    //     data: data,
    //     options: {
    //       colors: colors,
    //       series: {
    //         pie: {
    //           innerRadius: 0.6,
    //           show: true,
    //           stroke: {
    //             width: 0
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   return config;
    // };
    //
    // // generate flot pie chart
    // $scope.pie = function(data, colors, strokeWidth, strokeColor) {
    //   var config = {
    //     data: data,
    //     options: {
    //       colors: colors,
    //       series: {
    //         pie: {
    //           show: true,
    //           stroke: {
    //             width: (strokeWidth) ? strokeWidth : 0,
    //             color: (strokeColor) ? strokeColor : '#fff'
    //           }
    //         }
    //       }
    //     }
    //   };
    //
    //   return config;
    // };
    //
    // // generate sparkline bar chart
    // $scope.bar = function(data, height, colors, barWidth, barSpacing) {
    //   var config = {
    //     options: {
    //       type: 'bar',
    //       height: height,
    //       colorMap: colors,
    //       barWidth: barWidth,
    //       barSpacing: barSpacing,
    //       chartRangeMin: 0,
    //       chartRangeMax: 100,
    //       disableHighlight: true,
    //       disableTooltips: true
    //     },
    //     data: data
    //   };
    //
    //   return config;
    // };
    //
    // // define and actually call the charts
    // $scope.colorCharts = {
    //   grayscale: {
    //     donut: $scope.donut([30, 20, 20, 13, 10, 7], $scope.colors.grays.all()),
    //     pie: $scope.pie([33, 33, 33], [$scope.colors.grays.$gray1, $scope.colors.grays.$gray4, $scope.colors.grays.$gray5]),
    //     bar: $scope.bar([100, 80, 60, 50, 40, 30], '110px', $scope.colors.grays.all(), 27, 6)
    //   },
    //   blue: {
    //     donut: $scope.donut([30, 20, 20, 13, 10, 7], $scope.colors.blues.all()),
    //     pie: $scope.pie([33, 33, 33], [$scope.colors.blues.$blue1, $scope.colors.blues.$blue4, $scope.colors.blues.$blue5]),
    //     bar: $scope.bar([100, 80, 60, 50, 40, 30], '110px', $scope.colors.blues.all(), 27, 6)
    //   }
    // };
    //
    // $scope.donutsVaried = {
    //   donut01: $scope.donut([30, 20, 20, 13, 10, 7], $scope.colors.grays.all()),
    //   donut02: $scope.donut([30, 20, 20, 13, 10, 7], $scope.colors.blues.all()),
    //   donut03: $scope.donut([30, 20, 20, 13, 10, 7], [$scope.colors.blues.$blue1, $scope.colors.charts.$orange, $scope.colors.blues.$blue3, $scope.colors.blues.$blue4, $scope.colors.blues.$blue5, $scope.colors.blues.$blue6])
    // };
    // $scope.radial_01 = $scope.easypiechart(100, $scope.colors.blues.$blue1, 20, 63);
    // $scope.radial_02 = $scope.easypiechart(100, $scope.colors.blues.$blue6, 20, 37);
    // $scope.radial_03 = $scope.easypiechart(100, $scope.colors.blues.$blue4, 20, 90);
    //
    // $scope.percentage_01 = $scope.easypiechart(100, $scope.colors.charts.$green, 20, 90);
    // $scope.percentage_02 = $scope.easypiechart(100, $scope.colors.charts.$blue, 20, 75);
    // $scope.percentage_03 = $scope.easypiechart(100, $scope.colors.charts.$purple, 20, 63);
    // $scope.percentage_04 = $scope.easypiechart(100, $scope.colors.charts.$yellow, 20, 50);
    // $scope.percentage_05 = $scope.easypiechart(100, $scope.colors.charts.$orange, 20, 37);
    // $scope.percentage_06 = $scope.easypiechart(100, $scope.colors.charts.$red, 20, 10);
    //
    // $scope.donut_chart = $scope.donut([30, 20, 20, 13, 10, 7], $scope.colors.charts.all());
    // $scope.pie_chart = $scope.pie([25, 25, 25, 12, 8, 5], $scope.colors.charts.all(), 1);
    //
    // $scope.tri_pie_01 = $scope.pie([33, 33, 33], [$scope.colors.charts.$green, $scope.colors.charts.$purple, $scope.colors.charts.$orange]);
    // $scope.tri_pie_02 = $scope.pie([33, 33, 33], [$scope.colors.charts.$blue, $scope.colors.charts.$yellow, $scope.colors.charts.$red]);
    // $scope.tri_pie_03 = $scope.pie([33, 33, 33], [$scope.colors.charts.$green, $scope.colors.charts.$blue, $scope.colors.charts.$purple]);
    // $scope.tri_pie_04 = $scope.pie([33, 33, 33], [$scope.colors.charts.$yellow, $scope.colors.charts.$orange, $scope.colors.charts.$red]);
    // $scope.tri_pie_05 = $scope.pie([33, 33, 33], [$scope.colors.charts.$green, $scope.colors.charts.$yellow, $scope.colors.charts.$red]);
    // $scope.tri_pie_06 = $scope.pie([33, 33, 33], [$scope.colors.blues.$blue1, $scope.colors.blues.$blue3, $scope.colors.blues.$blue6]);
    //
    // $scope.bar_chart_01 = $scope.bar([100, 80, 60, 50, 40, 30], '110px', $scope.colors.charts.all(), 27, 6);

  });

})();
