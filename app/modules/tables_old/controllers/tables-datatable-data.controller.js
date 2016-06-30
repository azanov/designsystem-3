(function () {
  'use strict';

  angular.module('pb.ds.tables').controller('TablesDataController', function ($log, $uibModal, $scope, $sce) {
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

    _this.rowdata = [
      {
        date: 'Date',
        recipient: 'Recipient',
        carrier: 'Carrier',
        shipping: 'Shipping',
        tracking: 'Tracking',
        status: 'Status',
        amount: 'Amount'
      },
      {
        date: 'Date',
        recipient: 'Recipient',
        carrier: 'Carrier',
        shipping: 'Shipping',
        tracking: 'Tracking',
        status: 'Status',
        amount: 'Amount'
      }
    ];

    _this.rowclick = function (item, event) {
      event.preventDefault();
      event.stopPropagation();
      item.selected = !item.selected;
    };

    _this.xeditable = {
      data: [
        {
          first_name: 'John',
          last_name: 'Smth',
          carrier: 'USPS'
        },
        {
          first_name: 'Susie',
          last_name: 'Queue'
        }
      ],
      carriers: ['USPS', 'FedEx']
    };
  });
})();
