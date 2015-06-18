(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableController',
  function($log, MockDataFactory, moment) {

    var _this = this;


    _this.table = {
      data: MockDataFactory.query({filename: 'ds_users'}),
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      paging: {
        size: 10,
        sizes: [10, 25, 50, 100]
      },
      groups: {
        min: 10,
        max: 'Infinity'
      },
      search: {

      },
      searchClear: function() {
        _this.table.search.$ = '';
      },
      selectedRows: [],
      selectRow: function(data) {
        if (_this.table.selectedRows.indexOf(data.id) === -1) {
          _this.table.selectedRows.push(data.id);
        }
        else {
          _this.table.selectedRows.splice(_this.table.selectedRows.indexOf(data.id), 1);
          _this.table.allRowsSelected = false;
        }
      },
      selectAllRows: function() {
        var checked = !_this.table.selectAllFilteredRows();

        _this.table.selectedRows = [];

        angular.forEach(_this.table.dataFiltered, function(value, key) {
          value.selected = checked;

          if (checked) {
            _this.table.selectedRows.push(value.id);
          }

        });

      },
      selectAllFilteredRows: function() {
        var selected = 0;

        angular.forEach(_this.table.dataFiltered, function(value, key) {
          if (value.selected) {
            selected++;
          }
        });

        return (selected !== 0 && selected === _this.table.dataFiltered.length);
      },
      daterangepicker: {
        date: {
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month')
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


  //TODO: this filter hasndles the daterange and should be moved to the core/filters
  //NOTE: may want to change filter name, this handles a single date in the object
  angular.module('pb.ds.tables').filter('daterange', function($log, moment) {
    return function(items, start, end) {
      //$log.debug('FROM:', moment(start).unix(), 'TO:', moment(end).unix());

      var dateStart = moment(start).unix();
      var dateEnd = moment(end).unix();

      var result = [];

      angular.forEach(items, function(value, index) {
        //$log.debug(value, index);
        var itemDate = moment(value.date.created).unix();

        if (itemDate > dateStart && itemDate < dateEnd) {
          result.push(value);
        }
      });

      return result;

    };
  });

})();
