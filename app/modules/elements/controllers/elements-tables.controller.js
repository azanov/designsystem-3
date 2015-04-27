(function() {

  'use strict';

  angular.module('pb.elements').controller('TablesController', function($log, PeopleResolve) {

    var _this = this;

    _this.people = PeopleResolve;

  });

})();
