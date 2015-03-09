'use strict';

angular.module('pb.elements')
.controller('AlertsCtrl', ['$log',function($log) {

  var ctrl = this;

  ctrl.transitoryAlert = {
    fadeIn: 500,
    fadeOut: 1000,
    delay: 2000,
    message: '<strong>Success!</strong> Data was saved.',
    messageClass: 'text-success'
  };

}
]);
