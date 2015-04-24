(function() {

  'use strict';

  angular.module('app').controller('HeaderCtrl', function($log, MockDataFactory) {

    var _this = this;

    _this.nav = MockDataFactory.query({filename: 'navigation'});

  });

})();
