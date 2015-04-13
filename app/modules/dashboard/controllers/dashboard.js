(function() {

  'use strict';

  angular.module('pb.dashboard').controller('DashboardCtrl', function($log, navigation) {

    var _this = this;
    _this.navdata = {};

    navigation.get().then(function(response) {
      //$log.debug(response);
      _this.navdata = response.data.nav;
    });

  });

})();
