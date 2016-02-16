(function() {

  'use strict';

  angular.module('pb.ds.splitview').controller('HamburgerController', function($log) {

    var _this = this;

    _this.toggle = function () {
      $log.debug('clicked');
    };



  });

})();
