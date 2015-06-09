(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableController',
  function($log, MockDataFactory, moment) {

    var _this = this;


    _this.table = {
      data: MockDataFactory.query({filename: 'people_10'}),
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      search: {

      },
      searchClear: function() {
        _this.table.search.$ = '';
      },
      daterangepicker: {
        date: {
          startDate: moment(),
          endDate: moment()
        },
        options: {
          singleDatePicker: false,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
        }
      }
    };

  });

})();
