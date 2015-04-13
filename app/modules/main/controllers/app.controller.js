(function() {

  'use strict';

  angular.module('app').controller('AppCtrl', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

  });

})();
