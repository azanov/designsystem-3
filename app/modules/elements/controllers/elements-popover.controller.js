(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiPopoverController', function($scope) {

    var _this = this;

    _this.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'myPopoverTemplate.html',
      title: 'Title'
    };



  });

})();
