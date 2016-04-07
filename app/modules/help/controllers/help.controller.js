(function () {
  'use strict';

  angular.module('pb.ds.help').controller('HelpController', function ($log, $uibModal, $scope, $sce) {
    var _this = this;

    // popovers
    _this.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'modules/help/templates/popover_template.html',
      title: 'Title'
    };

    _this.dynamicTooltip = 'Hello, World!';
    _this.dynamicTooltipText = 'dynamic';
    _this.htmlTooltip = $sce.trustAsHtml("I've been made <b>bold</b>!");
  });
})();
