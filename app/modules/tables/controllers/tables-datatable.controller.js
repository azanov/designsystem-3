(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableController',
  function($log, MockDataFactory) {

    var _this = this;

    _this.data = MockDataFactory.query({filename: 'people_10'});

  });

})();
