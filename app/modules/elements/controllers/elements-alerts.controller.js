(function() {

  'use strict';

  angular.module('pb.elements').controller('AlertsController', function($log, toastr) {

    var _this = this;

    _this.transitoryAlert = {
      fadeIn: 500,
      fadeOut: 1000,
      delay: 2000,
      message: '<strong>Success!</strong> Data was saved.',
      messageClass: 'text-success'
    };

    _this.toast = {
      danger: function() {
        toastr.error('It is dangerous to remain here. You must leave within two days.', 'Message as follows:');
      },
      success:  function() {
        toastr.success('I am completely operational, and all my circuits are functioning perfectly.');
      },
      info:  function() {
        toastr.info('The 9000 series is the most reliable computer ever made.');
      },
      warning:  function() {
        toastr.warning('Just what do you think you\'re doing, Dave?');
      }

    };

  });

})();
