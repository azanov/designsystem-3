(function () {
  'use strict';

  angular.module('app').controller('HeaderController', function ($log, MockDataFactory) {
    var _this = this;

    _this.nav = MockDataFactory.query({filename: 'navigation'});

    _this.predicate = 'label';
  });
})();
