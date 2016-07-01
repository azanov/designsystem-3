(function () {
  'use strict';

  angular.module('app').controller('FooterController', function () {
    var _this = this;

    var date = new Date();
    _this.year = date.getFullYear();
  });
})();
