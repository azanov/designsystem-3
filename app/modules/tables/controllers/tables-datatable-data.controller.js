(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesDataController',
  function($log) {

    var _this = this;

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

    _this.rowclick = function(item, event) {
      event.preventDefault();
      event.stopPropagation();
      item.selected = !item.selected;
    };

  });

})();
