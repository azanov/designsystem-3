/* global pbDashboard */
/* jshint strict:false */

pbDashboard.controller('DashboardCtrl',
  function($log, navigationResolve) {
    var _this = this;

    _this.navData = navigationResolve.data;

    $log.debug(navigationResolve.data);

  }
);
