(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatablesNetController', function($log, PeopleResolve, DTOptionsBuilder, DTColumnBuilder) {

    var _this = this;

    $log.debug(PeopleResolve.$promise);

    //OPTIONS
    _this.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
      return PeopleResolve.$promise;
    })
    .withPaginationType('full_numbers')
    .withBootstrap();

    //COLUMNS
    _this.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('first_name').withTitle('First name'),
        DTColumnBuilder.newColumn('last_name').withTitle('Last name'),
        DTColumnBuilder.newColumn('email').withTitle('Email'),
        DTColumnBuilder.newColumn('country').withTitle('Country'),
        DTColumnBuilder.newColumn('date.created').withTitle('Created'),
        DTColumnBuilder.newColumn('groups').withTitle('Groups')

    ];

  });

})();
