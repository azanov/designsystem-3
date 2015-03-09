/* global app */
/* jshint strict:false */

  app.controller('HeaderCtrl', [
    '$log',
    'navigation',
    function($log, navigation){

    var ctrl = this;
    ctrl.nav = {};

    navigation.get().then(function(response){
      //$log.debug(response);
      ctrl.nav = response.data.nav;
    });

  }]);
