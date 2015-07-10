(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatablesNetController', function($log, PeopleResolve, DTOptionsBuilder, DTColumnBuilder, moment) {

    var _this = this;

    //OPTIONS
    _this.dtOptions = DTOptionsBuilder
    .fromFnPromise(function() {
      return PeopleResolve.$promise;
    })
    .withPaginationType('full_numbers')
    .withDOM('<"row"<"col-md-12"f>>t<"row"<"col-md-5"i><"col-md-2 text-center"l><"col-md-5"p>>')
    .withOption('language', {
      lengthMenu: '_MENU_ per page',
      info: '_START_-_END_ of _TOTAL_'
    })
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
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn('first_name').withTitle('First&nbsp;name'),
        DTColumnBuilder.newColumn('last_name').withTitle('Last&nbsp;name'),
        DTColumnBuilder.newColumn('email').withTitle('Email'),
        DTColumnBuilder.newColumn('country').withTitle('Country'),
        DTColumnBuilder.newColumn('date.created').withTitle('Created').withOption('sType', 'date').renderWith(function(data, type, full) {
          return moment(data).format('MM/DD/YYYY');
        }),
        DTColumnBuilder.newColumn('groups').withTitle('Groups').renderWith(function(data, type, full) {
          return data.join(', ');
        })

    ];

  });

})();
