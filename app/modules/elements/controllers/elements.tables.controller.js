(function() {

  'use strict';

  angular.module('pb.elements').controller('TablesCtrl', function($log, peopleResolve) {

    var _this = this;

    _this.people = peopleResolve;

  });

})();
