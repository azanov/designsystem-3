(function() {

  'use strict';

  angular.module('pb.ds.splitview').controller('HamburgerController', function($log) {

    var _this = this;


    _this.checked = false; // This will be binded using the ps-open attribute

    _this.toggle = function() {
      _this.checked = !_this.checked;
      $log.debug('clicked');
    };

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

  angular.element(document).ready(function() {

    c = angular.element(document.querySelector('#controller-demo')).scope();
  });

})();
