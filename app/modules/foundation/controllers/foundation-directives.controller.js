(function () {
  'use strict';
  angular.module('pb.ds.foundation').controller('DirectiveController', function ($timeout) {
    var _this = this;

    _this.loading = {
      isLoading: false,
      isLoadingMsg: 'Updating',
      label: 'Start Update',
      toggle: function () {
        _this.loading.isLoading = !_this.loading.isLoading;

        $timeout(function () {
          _this.loading.isLoading = !_this.loading.isLoading;
        }, 1500);
      }
    };
  });
})();
