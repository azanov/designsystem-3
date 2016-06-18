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
        var wrapper = $compile('<a target=\'{{target}}\' ui-sref=\'{{sref}}\'></a>')(scope);

        var imageElement = element.find('.pb-demo-image-wrapper');

        imageElement.wrap(wrapper);
      }

    };
  }]);
})();