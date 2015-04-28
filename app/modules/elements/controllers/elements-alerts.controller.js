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

    _this.showToastrAlert = function() {
      toastr.error('That email is not recognized.', 'Sorry');
    };

    _this.showToastrSuccess = function() {
      toastr.success('An email has been sent to you.', 'Excellent');
    };

  });

})();
