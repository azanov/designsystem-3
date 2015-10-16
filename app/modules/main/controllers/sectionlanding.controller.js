(function() {

  'use strict';

  angular.module('app').controller('SectionLandingController', function($log, NavigationResolve) {

    var _this = this;

    _this.nav = NavigationResolve;

    $log.debug(_this.nav);


  });

})();
