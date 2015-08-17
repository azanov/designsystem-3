(function() {

  'use strict';

  angular.module('app').controller('SubHeaderController', function($log, $location, $anchorScroll) {

    var _this = this;

    _this.linkTo = function(target) {
      $log.debug($location, target);
      $anchorScroll.yOffset = 150;

      $location.hash(target);
      $anchorScroll();
    };

  });

  angular.module('app')
  .run(function($anchorScroll) {
    $anchorScroll.yOffset = 150;   // always scroll by 150 extra pixels
  });

})();
