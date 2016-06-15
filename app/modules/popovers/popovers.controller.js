(function () {
  'use strict';

  angular.module('pb.ds.popovers').controller('PopoversController', function ($log) {
    var _this = this;

    _this.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'myPopoverTemplate.html',
      title: 'Title'
    };
  });
})();
