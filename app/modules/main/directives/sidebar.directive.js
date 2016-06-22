(function () {
  'use strict';

  angular.module('app').directive('pbSidebar', function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/pb-sidebar.html',
      transclude: true,
      link: function postLink (scope, element, attrs) {
        element.affix({
          offset: {
            top: 200
          }
        });
      }
    };
  });
})();
