(function () {
  'use strict';

  angular.module('pb.ds.patterns').controller('GettingStartedController', function ($log, uiTourService) {
    var _this = this;
    _this.tour;
    _this.showButton = false;

    _this.launchTour = function () {
      _this.showButton = false;
      _this.tour.start();
    };

    _this.onReady = function (tour) {
      _this.tour = uiTourService.getTour();

      _this.tour.on('ended', function () {
        _this.showButton = true;
      });

      tour.start();
    };

  });
})();
