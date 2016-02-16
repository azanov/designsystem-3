(function() {

  'use strict';

  angular.module('pb.ds.burger').controller('HamburgerController', function($log) {

    var _this = this;

    _this.toggle = function() {
      _this.checked = !_this.checked;
      $log.debug('clicked');
    };




  });


})();
