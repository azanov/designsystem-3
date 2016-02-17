(function() {

  'use strict';

  angular.module('pb.ds.splitview').controller('HamburgerController', function($log) {

    var _this = this;

    _this.showHeaderFooter = false;

    _this.show.bs.offcanvas	= function () {
      $log.debug('shown');
    };

  });

})();
