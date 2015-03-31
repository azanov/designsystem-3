/* global app */
/* jshint strict:false */

app.controller('HeaderCtrl', [
  '$log',
  'navigation',
  function($log, navigation) {

    var _this = this;
    _this.nav = {};

    navigation.get().then(function(response) {
      //$log.debug(response);
      _this.nav = response.data.nav;
    });

  }
]);
