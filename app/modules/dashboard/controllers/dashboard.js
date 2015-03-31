/* global pbDashboard */
/* jshint strict:false */

pbDashboard.controller('DashboardCtrl', ['$log', 'people',
  function($log, people) {
    var _this = this;

    _this.people = people.data.data;

  }
]);
