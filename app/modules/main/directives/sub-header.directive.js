(function() {

  'use strict';

  angular.module('app').directive('subHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/sub-header.html',
      controller: 'SubHeaderController as subheader',

      transclude: true,
      link: function(scope, el, attrs, ctrl, transclude) {
        el.find('.jump-menu').append(transclude());
      }
    };
  });

})();
