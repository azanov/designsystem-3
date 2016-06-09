(function () {
  'use strict';

  angular.module('pb.ds.patterns').controller('GettingStartedController', function ($log, uiTourService) {
    var _this = this;
    _this.tour;

    _this.onTourStart = function (tour) {
      console.log(tour);
    };

    _this.test = function (msg) {
      console.log(msg);
    }

    _this.onReady = function (tour) {
      _this.tour = uiTourService.getTour();
      console.log('TOUR: ', _this.tour);
      tour.start();
    };

  });
})();
