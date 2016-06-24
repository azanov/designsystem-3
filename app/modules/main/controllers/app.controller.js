(function () {
  'use strict';

  angular.module('app').controller('AppController', function ($rootScope, $state) {
    var _this = this;
    $rootScope.$state = $state;

    _this.header = 'fixed';
    _this.footer = true;
    _this.showHeader = true;

    _this.rtl = 'ltr';

    $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
      var parent = $element.parent('.list-group'),
        visibleClass = 'list-group-visible',
        groupHeaddingClass = 'active-group-headding';

      $('.' + visibleClass).removeClass(visibleClass);

      $('.' + groupHeaddingClass).removeClass(groupHeaddingClass);

      if (parent.length) {
        parent.prev().find('a').addClass(groupHeaddingClass);
        parent.addClass(visibleClass);
      }


    });

  });
})();
