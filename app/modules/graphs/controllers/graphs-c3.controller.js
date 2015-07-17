(function() {

  'use strict';

  angular.module('pb.ds.graphs').controller('C3Controller', function($log) {

    var _this = this;

    //COLORS
    _this.colors = [
      '#00b140',
      '#0082d5',
      '#a03f9b',
      '#edb700',
      '#ef8200',
      '#cf0989'
    ];

    //DONUT
    _this.donut = {
      options: {
        data: [
          {
            data1: 60,
            data2: 40,
            data3: 70,
            data4: 20,
            data5: 10,
            data6: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut'
          },
          data2: {
            type: 'donut'
          },
          data3: {
            type: 'donut'
          },
          data4: {
            type: 'donut'
          },
          data5: {
            type: 'donut'
          },
          data6: {
            type: 'donut'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    //PIE
    _this.pie = {
      options: {
        data: [
          {
            data1: 60,
            data2: 40,
            data3: 70,
            data4: 20,
            data5: 10,
            data6: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'pie'
          },
          data2: {
            type: 'pie'
          },
          data3: {
            type: 'pie'
          },
          data4: {
            type: 'pie'
          },
          data5: {
            type: 'pie'
          },
          data6: {
            type: 'pie'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    //GAUGE
    _this.gauge = {
      options: {
        data: [
          {
            data1: 60
          }
        ],
        dimensions: {
          data1: {
            type: 'gauge',
            label: 'false'
          }
        },
        chart: {
          zoom: false,
          legend: false,
          tooltip: {
            show: false
          },
          color: {
            pattern: _this.colors
          },
          gauge: {
            expand: false,
            units: 'Speed',
            label: {
              format: function(value, ratio) {
                return value + ' m/s';
              }
            }
          }
        }
      }
    };

    //BAR
    _this.bar = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'bar',
            name: 'Sales'
          },
          data2: {
            type: 'bar',
            name: 'Marketing'
          },
          data3: {
            type: 'bar',
            name: 'Engineering'
          },
          data4: {
            type: 'bar',
            name: 'IT'
          },
          data5: {
            type: 'bar',
            name: 'Support'
          },
          data6: {
            type: 'bar',
            name: 'Operations'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: [
              '#00b140',
              '#0082d5',
              '#a03f9b',
              '#edb700',
              '#ef8200',
              '#cf0989'
            ]
          }
        }
      }
    };

    //LINE
    _this.line = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'spline',
            name: 'Sales'
          },
          data2: {
            type: 'spline',
            name: 'Marketing'
          },
          data3: {
            type: 'spline',
            name: 'Engineering'
          },
          data4: {
            type: 'spline',
            name: 'IT'
          },
          data5: {
            type: 'spline',
            name: 'Support'
          },
          data6: {
            type: 'spline',
            name: 'Operations'
          }
        },
        chart: {
          legend: {
            hide: false
          },
          tooltip: {
            show: true
          },
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    //AREA
    _this.area = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40
          }
        ],
        dimensions: {
          year: {
            axis: 'x'
          },
          data1: {
            type: 'area',
            name: 'Sales'
          },
          data2: {
            type: 'area-spline',
            name: 'Marketing'
          },
          data3: {
            type: 'area-spline',
            name: 'Engineering'
          },
          data4: {
            type: 'area-spline',
            name: 'IT'
          },
          data5: {
            type: 'area-spline',
            name: 'Support'
          },
          data6: {
            type: 'area-spline',
            name: 'Operations'
          }
        },
        chart: {
          grid: {
            y: {
              show: true
            }
          },
          color: {
            pattern: _this.colors
          }
        }
      }
    };

  });

})();
