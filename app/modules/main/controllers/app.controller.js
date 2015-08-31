(function() {

  'use strict';

  angular.module('app').controller('AppController', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

    _this.header = 'fixed';
    _this.footer = true;

    _this.rtl = 'ltr';

  });

})();
