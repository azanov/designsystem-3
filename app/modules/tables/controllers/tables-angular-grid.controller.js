(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesAngularGridController', function($log, PeopleResolve, moment) {

    var _this = this;

    var columnDefs = [
      {headerName: "", field: "", checkboxSelection: true},
      {headerName: "First Name", field: "first_name"},
      {headerName: "Last Name", field: "last_name"}
    ];

    _this.gridOptions = {
      columnDefs: columnDefs,
      rowData: PeopleResolve,
      dontUseScrolls: true, // because so little data, no need to use scroll bars
      rowSelection: 'multiple',
      enableColResize: true,
      enableSorting: true,
      enableFilter: true,
      colWidth: 200
    };


  });

})();
