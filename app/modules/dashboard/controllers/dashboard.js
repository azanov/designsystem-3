/* global pbDashboard */
/* jshint strict:false */

  pbDashboard.controller('DashboardCtrl', ['$log','people',
    function($log, people){
      var ctrl = this;

      ctrl.people = people.data.data;

    }
  ]);
