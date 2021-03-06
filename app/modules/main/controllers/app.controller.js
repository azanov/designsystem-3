(function () {
  'use strict';

  angular.module('app').controller('AppController', function ($rootScope, $state) {
    var _this = this;
    $rootScope.$state = $state;

    _this.header = 'fixed';
    _this.footer = true;
    _this.showHeader = true;

    _this.rtl = 'ltr';

    $rootScope.$on('duScrollspy:becameActive', function ($event, $element, $target) {
      var parent = $element.parent('.list-group');
      var visibleClass = 'list-group-visible';

      $('.' + visibleClass).removeClass(visibleClass);

      if (parent.length) {
        parent.addClass(visibleClass);
      }
    });
  });
})();
