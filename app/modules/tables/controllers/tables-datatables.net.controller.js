(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatablesNetController', function($log, $compile, $scope, PeopleResolve, DTOptionsBuilder, DTColumnBuilder, moment) {

    var _this = this;


    //datatable model
    _this.datatable = {
      titleHtml: '<input type="checkbox" ng-model="datatablesnet.datatable.selectAll" ng-click="datatablesnet.datatable.toggleAll(datatablesnet.datatable.selectAll, datatablesnet.datatable.selected)">',
      selected: {},
      selectAll: false,
      toggleAll: function toggleAll(selectAll, selectedItems) {
        for (var id in selectedItems) {
          if (selectedItems.hasOwnProperty(id)) {
            selectedItems[id] = selectAll;
          }
        }
      },
      toggleOne: function toggleOne(selectedItems) {
        var me = _this;
        for (var id in selectedItems) {
          if (selectedItems.hasOwnProperty(id)) {
            if (!selectedItems[id]) {
              me.selectAll = false;
              return;
            }
          }
        }
        me.selectAll = true;
      }
    }

    //OPTIONS
    _this.dtOptions = DTOptionsBuilder
    .fromFnPromise(function() {
      return PeopleResolve.$promise;
    })
    .withPaginationType('full_numbers')
    .withDOM('<"row"<"col-md-6 table-buttons"><"col-md-6"f>>t<"row"<"col-md-5"i><"col-md-2 text-center"l><"col-md-5"p>>')
    .withOption('language', {
      search: 'Search',
      lengthMenu: '_MENU_ per page',
      info: '_START_-_END_ of _TOTAL_',
      paginate: {
        first: '&lt:&lt;',
        previous: '&lt;',
        next: '&gt;',
        last: '&gt;&gt;'
      }
    })
    .withOption('headerCallback', function(header) {
      if (!_this.datatable.headerCompiled) {
        // Use this headerCompiled field to only compile header once
        _this.datatable.headerCompiled = true;
        $compile(angular.element(header).contents())($scope);
      }
    })
    .withOption('createdRow', function(row, data, dataIndex) {
      // Recompiling so we can bind Angular directive to the DT
      $compile(angular.element(row).contents())($scope);
    })
    .withOption('order', [[1, 'desc']])
    .withBootstrap()
    .withBootstrapOptions({
      pagination: {
        classes: {
          ul: 'pagination pagination-sm test'
        }
      }
    });

    //COLUMNS
    _this.dtColumns = [
      DTColumnBuilder.newColumn(null).withTitle(_this.datatable.titleHtml).renderWith(function(data, type, full, meta) {
        _this.datatable.selected[full.id] = false;
        return '<input type="checkbox" ng-model="datatablesnet.datatable.selected[' + data.id + ']" ng-click="datatablesnet.datatable.toggleOne(datatablesnet.datatable.selected)">';
      }).notSortable(),
      DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
      DTColumnBuilder.newColumn('first_name').withTitle('First&nbsp;name'),
      DTColumnBuilder.newColumn('last_name').withTitle('Last&nbsp;name'),
      DTColumnBuilder.newColumn('email').withTitle('Email'),
      DTColumnBuilder.newColumn('country').withTitle('Country').withClass('nowrap'),
      DTColumnBuilder.newColumn('date.created').withTitle('Created').withOption('sType', 'date').renderWith(function(data, type, full) {
        return moment(data).format('MM/DD/YYYY');
      }),
      DTColumnBuilder.newColumn('groups').withTitle('Groups').renderWith(function(data, type, full) {
        return data.join(', ');
      }).notSortable()
    ];

  });

})();
