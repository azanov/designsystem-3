(function() {

  'use strict';

  angular.module('app').controller('AppController', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

  });

})();
