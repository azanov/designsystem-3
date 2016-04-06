;(function () {
  'use strict'

  angular.module('pb.ds.hamburger').controller('HamburgerController', function ($log) {
    var _this = this

    // unclear where this is being stored
    _this.showHeaderFooter = false

    // start the nav as not open
    _this.open = false
  })
})()
