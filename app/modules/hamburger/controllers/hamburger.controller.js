(function () {
  'use strict';

  angular.module('pb.ds.hamburger').controller('HamburgerController', function ($log) {
    var _this = this;

    // unclear where this is being stored
    _this.showHeaderFooter = false;

    // start the nav as not open
    _this.open = false;


    _this.leftnav = [{
      'label': 'Appetizers',
      'value': '',
      'toggle': 'dropdown',
      'children': [{
        'label': 'Hot Wings',
        'value': ''
      }, {
        'label': 'Nachos',
        'value': ''
      }, {
        'label': 'Bruscheta',
        'value': ''
      }, {
        'label': 'Chicken Fingers',
        'value': ''
      }]
    }, {
      'label': 'Salads',
      'value': '',
      'toggle': 'dropdown',
      'children': [{
        'label': 'Cobb',
        'value': ''
      }, {
        'label': 'Chef',
        'value': ''
      }, {
        'label': 'American',
        'value': ''
      }, {
        'label': 'Greek',
        'value': '',
        'className': 'popovers'
      }, {
        'label': 'Tomato Basil',
        'value': ''
      }]
    }, {
      'label': 'Desserts',
      'value': '',
      'toggle': 'dropdown',
      'children': [{
        'label': 'Ice Cream',
        'value': ''
      }, {
        'label': 'Rice Pudding',
        'value': ''
      }, {
        'label': 'Creme Brulee',
        'value': ''
      }, {
        'label': 'Sorbet',
        'value': ''
      }, {
        'label': 'Cake',
        'value': ''
      }, {
        'label': 'Yodels',
        'value': ''
      }, {
        'label': 'Cannoli',
        'value': ''
      }]
    }];
  });
})();
