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

    _this.grayscale = [
      '#414141',
      '#4e4e4e',
      '#686868',
      '#818181',
      '#9b9b9b',
      '#c0c0c0'
    ];

    _this.mono = [
      '#3e53a4',
      '#5d71be',
      '#8393d0',
      '#9aa6d6',
      '#afb9dd',
      '#c5cbe4'
    ];



    //DONUT
    _this.donutColor3 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          },
          tooltip: {
            show: true
          },
          donut: {
            label: {
              show: true
            }
          }
        }
      }
    };

    _this.donutColor6 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40,
            data4: 20,
            data5: 10,
            data6: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    _this.donutColor10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          },
          data7: {
            type: 'donut',
            name: 'Communications'
          },
          data8: {
            type: 'donut',
            name: 'Triage'
          },
          data9: {
            type: 'donut',
            name: 'Mailroom'
          },
          data10: {
            type: 'donut',
            name: 'Control'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    _this.donutGray3 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          }
        },
        chart: {
          color: {
            pattern: [_this.grayscale[0], _this.grayscale[2], _this.grayscale[4]]
          },
          tooltip: {
            show: true
          },
          donut: {
            label: {
              show: true
            }
          }
        }
      }
    };

    _this.donutGray6 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40,
            data4: 20,
            data5: 10,
            data6: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          }
        },
        chart: {
          color: {
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.donutGray10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          },
          data7: {
            type: 'donut',
            name: 'Communications'
          },
          data8: {
            type: 'donut',
            name: 'Triage'
          },
          data9: {
            type: 'donut',
            name: 'Mailroom'
          },
          data10: {
            type: 'donut',
            name: 'Control'
          }
        },
        chart: {
          color: {
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.donutMono3 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          }
        },
        chart: {
          color: {
            pattern: [_this.mono[0], _this.mono[2], _this.mono[4]]
          },
          tooltip: {
            show: true
          },
          donut: {
            label: {
              show: true
            }
          }
        }
      }
    };

    _this.donutMono6 = {
      options: {
        data: [
          {
            data1: 70,
            data2: 60,
            data3: 40,
            data4: 20,
            data5: 10,
            data6: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          }
        }
      }
    };

    _this.donutMono10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'donut',
            name: 'Sales'
          },
          data2: {
            type: 'donut',
            name: 'Marketing'
          },
          data3: {
            type: 'donut',
            name: 'Engineering'
          },
          data4: {
            type: 'donut',
            name: 'IT'
          },
          data5: {
            type: 'donut',
            name: 'Support'
          },
          data6: {
            type: 'donut',
            name: 'Operations'
          },
          data7: {
            type: 'donut',
            name: 'Communications'
          },
          data8: {
            type: 'donut',
            name: 'Triage'
          },
          data9: {
            type: 'donut',
            name: 'Mailroom'
          },
          data10: {
            type: 'donut',
            name: 'Control'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          }
        }
      }
    };



    //PIE
    _this.pieColor3 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: [_this.colors[0], _this.colors[2], _this.colors[4]]
          }
        }
      }
    };

    _this.pieColor6 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    _this.pieColor10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          },
          data7: {
            type: 'pie',
            name: 'Sales'
          },
          data8: {
            type: 'pie',
            name: 'Sales'
          },
          data9: {
            type: 'pie',
            name: 'Sales'
          },
          data10: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.colors
          }
        }
      }
    };

    _this.pieGray3 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: [_this.grayscale[0], _this.grayscale[2], _this.grayscale[4]]
          }
        }
      }
    };

    _this.pieGray6 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.pieGray10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          },
          data7: {
            type: 'pie',
            name: 'Sales'
          },
          data8: {
            type: 'pie',
            name: 'Sales'
          },
          data9: {
            type: 'pie',
            name: 'Sales'
          },
          data10: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.pieMono3 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: [_this.mono[0], _this.mono[2], _this.mono[4]]
          }
        }
      }
    };

    _this.pieMono6 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          }
        }
      }
    };

    _this.pieMono10 = {
      options: {
        data: [
          {
            data1: 90,
            data2: 80,
            data3: 70,
            data4: 60,
            data5: 50,
            data6: 40,
            data7: 30,
            data8: 20,
            data9: 10,
            data10: 5
          }
        ],
        dimensions: {
          data1: {
            type: 'pie',
            name: 'Sales'
          },
          data2: {
            type: 'pie',
            name: 'Sales'
          },
          data3: {
            type: 'pie',
            name: 'Sales'
          },
          data4: {
            type: 'pie',
            name: 'Sales'
          },
          data5: {
            type: 'pie',
            name: 'Sales'
          },
          data6: {
            type: 'pie',
            name: 'Sales'
          },
          data7: {
            type: 'pie',
            name: 'Sales'
          },
          data8: {
            type: 'pie',
            name: 'Sales'
          },
          data9: {
            type: 'pie',
            name: 'Sales'
          },
          data10: {
            type: 'pie',
            name: 'Sales'
          }
        },
        chart: {
          color: {
            pattern: _this.mono
          }
        }
      }
    };



    //BAR
    _this.barColor3 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90
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

    _this.barColor6 = {
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

    _this.barColor10 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
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
          },
          data7: {
            type: 'bar',
            name: 'Operations'
          },
          data8: {
            type: 'bar',
            name: 'Operations'
          },
          data9: {
            type: 'bar',
            name: 'Operations'
          },
          data10: {
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

    _this.barGray3 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90
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
            pattern: [_this.grayscale[0], _this.grayscale[2], _this.grayscale[4]]
          }
        }
      }
    };

    _this.barGray6 = {
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
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.barGray10 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
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
          },
          data7: {
            type: 'bar',
            name: 'Operations'
          },
          data8: {
            type: 'bar',
            name: 'Operations'
          },
          data9: {
            type: 'bar',
            name: 'Operations'
          },
          data10: {
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
            pattern: _this.grayscale
          }
        }
      }
    };

    _this.barMono3 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90
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
            pattern: [_this.mono[0], _this.mono[2], _this.mono[4]]
          }
        }
      }
    };

    _this.barMono6 = {
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
            pattern: _this.mono
          }
        }
      }
    };

    _this.barMono10 = {
      options: {
        data: [
          {
            year: 2005,
            data1: 90,
            data2: 100,
            data3: 30,
            data4: 50,
            data5: 75,
            data6: 20,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2006,
            data1: 60,
            data2: 40,
            data3: 80,
            data4: 70,
            data5: 30,
            data6: 50,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
          },
          {
            year: 2007,
            data1: 30,
            data2: 80,
            data3: 90,
            data4: 75,
            data5: 60,
            data6: 40,
            data7: 40,
            data8: 50,
            data9: 70,
            data10: 30
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
          },
          data7: {
            type: 'bar',
            name: 'Operations'
          },
          data8: {
            type: 'bar',
            name: 'Operations'
          },
          data9: {
            type: 'bar',
            name: 'Operations'
          },
          data10: {
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
            pattern: _this.mono
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
