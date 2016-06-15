(function () {
  'use strict';

  angular.module('pb.ds.switches').controller('SwitchesController', function ($log) {
    var _this = this;

    // SWITCHES
    _this.switchStatus1 = false;
    _this.switchStatus2 = false;
    _this.switchStatus3 = true;
    _this.switchStatus4 = false;
  });
})();
