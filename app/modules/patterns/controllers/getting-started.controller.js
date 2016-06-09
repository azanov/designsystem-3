(function () {
  'use strict';

  angular.module('pb.ds.patterns').controller('GettingStartedController', function ($log) {
    var _this = this;
    _this.tour;
    
    // `Launch Tour` button state
    _this.showButton = false;

    // `Launch Tour` button
    _this.launchTour = function () {
      _this.showButton = false;
      _this.tour.start();
    };

    // run the tour when ready
    _this.onReady = function (tour) {
      _this.tour = tour;

      // show launch button when tour ends
      _this.tour.on('ended', function () {
        _this.showButton = true;
      });

      // we're ready, start the show...
      _this.tour.start();
    };

  });

})();
