/* global app */
/* jshint strict:false */

app.controller('AppCtrl', [
  '$log',
  '$rootScope',
  '$state',
  function($log, $rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

  }
]);
