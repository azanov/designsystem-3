(function() {

  'use strict';

  angular.module('pb.dashboard').controller('DashboardCtrl', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve.nav;

  });

})();
