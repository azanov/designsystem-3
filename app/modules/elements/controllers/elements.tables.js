(function() {

  'use strict';

  angular.module('pb.elements').controller('TablesCtrl', function($scope, $log, peopleResolve) {
    var _this = this;
    _this.people = peopleResolve.data.data;
  });

})();
