(function () {
  'use strict';

  angular.module('pb.ds.datepickers').controller('DatePickersController', function ($log, moment) {
    var _this = this;

    _this.singlepicker = {
      date: {
        startDate: moment().startOf('year'),
        endDate: moment().startOf('day')
      },
      options: {
        singleDatePicker: true,
        locale: {
          format: 'MM/DD/YYYY'
        }
      }
    };

    _this.daterangepicker = {
      date: {
        startDate: moment().startOf('year'),
        endDate: moment().endOf('month')
      },
      options: {
        singleDatePicker: false,
        locale: {
          format: 'MM/DD/YYYY'
        },
        opens: 'center',
        autoApply: false,
        applyClass: 'btn-primary',
        ranges: {
          Today: [moment(), moment()],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Month to date': [moment().startOf('month'), moment()],
          'Year to date': [moment().startOf('year'), moment()]
        }
      }
    };

    _this.daterangepicker2 = {
      date: {
        startDate: moment().startOf('year'),
        endDate: moment().endOf('month')
      },
      options: {
        singleDatePicker: false,
        format: 'MM/DD/YYYY',
        opens: 'center',
        autoApply: true,
        ranges: {
          Today: [moment(), moment()],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Month to date': [moment().startOf('month'), moment()],
          'Year to date': [moment().startOf('year'), moment()]
        }
      }
    };

    _this.daterangepicker3 = {
      date: {
        startDate: moment().startOf('day'),
        endDate: moment().endOf('day')
      },
      options: {
        singleDatePicker: false,
        format: 'MM/DD/YYYY',
        opens: 'center',
        autoApply: true,
        ranges: {
          Today: [moment(), moment()],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Month to date': [moment().startOf('month'), moment()],
          'Year to date': [moment().startOf('year'), moment()]
        }
      },
      displayDate: function (start, end) {
        var startDate = start || _this.daterangepicker3.date.startDate;
        var endDate = end || _this.daterangepicker3.date.endDate;

        var dateDiff = endDate.diff(startDate, 'days');
        var result = '';

        if (dateDiff === 0) {
          result = 'Today ' + moment(startDate).format('MM/DD/YYYY');
        } else if (dateDiff === 6) {
          result = 'Last 7 days';
        } else {
          result = 'From ' + moment(startDate).format('MM/DD/YYYY') + ' to ' + moment(endDate).format('MM/DD/YYYY');
        }

        return result;
      }
    };

    _this.customRange = {
      items: [
        {
          label: 'Today',
          start: moment().startOf('day'),
          end: moment().endOf('day'),
          selected: false,
          isRange: false,
          isCustom: false
        },
        {
          label: 'Yesterday',
          start: moment().startOf('day').subtract(1, 'days'),
          end: moment().endOf('day').subtract(1, 'days'),
          selected: true,
          isRange: false,
          isCustom: false
        },
        {
          label: 'Last 7 Days',
          start: moment().startOf('day').subtract(7, 'days'),
          end: moment().endOf('day'),
          selected: false,
          isRange: true,
          isCustom: false
        },
        {
          label: 'Custom',
          selected: false,
          isRange: true,
          isCustom: true
        }
      ],
      selected: null,
      init: function () {
        angular.forEach(_this.customRange.items, function (value, index) {
          if (value.selected === true) {
            _this.customRange.selected = value;

            _this.customRange.start.date.startDate = value.start;
            _this.customRange.start.date.endDate = value.start;

            _this.customRange.end.date.startDate = value.end;
            _this.customRange.end.date.endDate = value.end;
            return;
          }
        });
      },
      click: function (item) {
        angular.forEach(_this.customRange.items, function (value, index) {
          value.selected = false;
        });

        item.selected = true;

        if (item.isCustom) {
          item.start = _this.customRange.selected.start;
          item.end = _this.customRange.selected.end;
        }

        _this.customRange.start.date.startDate = item.start;
        _this.customRange.start.date.endDate = item.start;

        _this.customRange.end.date.startDate = item.end;
        _this.customRange.end.date.endDate = item.end;

        _this.customRange.selected = item;
      },
      end: {
        date: {
          startDate: moment().startOf('day'),
          endDate: moment().endOf('day')
        },
        options: {
          singleDatePicker: true,
          autoApply: true,
          locale: {
            format: 'MM/DD/YYYY'
          },
          opens: 'center',
          eventHandlers: {
            'apply.daterangepicker': function (ev, picker) {
              // handle when date changed
            }
          }
        }
      },
      start: {
        date: {
          startDate: moment().startOf('day'),
          endDate: moment().endOf('day')
        },
        options: {
          singleDatePicker: true,
          autoApply: true,
          locale: {
            format: 'MM/DD/YYYY'
          },
          opens: 'center',
          eventHandlers: {
            'apply.daterangepicker': function (ev, picker) {
              // handle when date changed
            }
          }
        }
      }

    };
  });
})();
