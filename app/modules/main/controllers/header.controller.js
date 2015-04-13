(function() {

  'use strict';

  angular.module('app').controller('HeaderCtrl', function($log, navigation) {

    var _this = this;
    _this.nav = {};

    navigation.get().then(function(response) {
      //$log.debug(response);
      _this.nav = response.data.nav;
    });

  });

})();
