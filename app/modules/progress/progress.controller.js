(function () {
  'use strict';

  angular.module('pb.ds.progress').controller('ProgressController', function ($log, $timeout, cfpLoadingBar) {
    var _this = this;
    // show the project bar at the top
    _this.startProgress = function () {
      cfpLoadingBar.start();
      $timeout(function () {
        cfpLoadingBar.complete();
      }, 4000);
    };

    // spinner button 1
    _this.buttonLoading = {
      isLoading: false,
      text: 'Saving',
      speed: 0.7,
      iconClass: 'fa-circle-o-notch',
      load: function () {
        _this.buttonLoading.isLoading = true;
        $timeout(function () {
          _this.buttonLoading.isLoading = false;
        }, 2000);
      }
    };

    // spinner button 2
    _this.buttonLoading2 = {
      isLoading: false,
      text: 'Updating',
      speed: 0.7,
      iconClass: 'fa-circle-o-notch',
      load: function () {
        _this.buttonLoading2.isLoading = true;
        $timeout(function () {
          _this.buttonLoading2.isLoading = false;
        }, 3000);
      }
    };
  });
})();
