(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDatatableController',
  function($log, MockDataFactory) {

    var _this = this;

    _this.data = MockDataFactory.query({filename: 'people_10'});

    _this.sortType = 'first_name';
    _this.sortReverse  = false;

    _this.sort = function(key) {
      _this.sortType = key;
      _this.sortReverse = !_this.sortReverse;
    };

  });

})();
