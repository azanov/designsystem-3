(function() {

  'use strict';

  angular.module('app').controller('AppController', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

    _this.header = 'animated';
    _this.footer = false;

    _this.rtl = 'ltr';

  });

})();
