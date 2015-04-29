(function() {

  'use strict';

  angular.module('pb.dashboard').controller('DashboardController', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();
