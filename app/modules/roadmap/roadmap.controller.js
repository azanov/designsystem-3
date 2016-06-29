(function () {
  'use strict';

  angular.module('pb.ds.roadmap').controller('RoadmapController', function ($log, RoadmapResolve) {
    var _this = this;

    _this.roadmapData = RoadmapResolve;
  });
})();
