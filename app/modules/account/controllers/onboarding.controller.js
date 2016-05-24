(function () {
  'use strict';
  angular.module('pb.ds.patterns').controller('onBoardingCtrl',
    function ($log, MockDataFactory) {
      var _this = this;

      MockDataFactory.get({filename: 'onboarding'}).$promise.then(function (data) {
        _this.slides = data.slides;
      });
    });
})();
