(function () {
  'use strict';

  angular.module('app').directive('pbDemo', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/demo.html',
      transclude: true,
      scope: {
        target: '@',
        sref: '@'
      },
      link: function postLink (scope, element, attrs) {
        var wrapperClass = 'pb-demo-wrapper';
        var wrapper = $compile('<a target=\'{{target}}\' ui-sref=\'{{sref}}\' class='+ wrapperClass +'></a>')(scope);
        scope.triggerOverflow = triggerOverflow;

        function triggerOverflow($event) {
          var target = $($event.currentTarget);
          if (target.parent('.' + wrapperClass).length) {
            target.unwrap(wrapper);
          } else {
            target.wrap(wrapper);
          }
        }
      }

    };
  }]);
})();