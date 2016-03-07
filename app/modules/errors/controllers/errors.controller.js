(function() {

  'use strict';

  angular.module('pb.ds.errors').controller('ErrorsController', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();
