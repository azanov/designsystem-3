(function() {

  'use strict';

<<<<<<< f7d819aa25f0227aa9da8664def14ee5bc033900
  angular.module('pb.ds.splitview').controller('HamburgerController', function($log) {

    var _this = this;


    _this.showHeaderFooter = false;

    _this.show.bs.offcanvas	= function () {
      _this.checked = !_this.checked;
      $log.debug('shown');
    };

  });

})();
