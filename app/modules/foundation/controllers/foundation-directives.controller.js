(function () {
  'use strict';
  angular.module('pb.ds.foundation').controller('DirectiveController', function () {
    var _this = this;
    _this.loading = false;
    _this.toggleLoading = function () {
      _this.loading = !_this.loading;
    };
    _this.loadingMsg = 'Loading';
    _this.labelMsg = 'Send';
  });
})();
