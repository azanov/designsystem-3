(function () {
  'use strict';
  var module = angular.module('pb.ds.components');
  module.directive('pbdsRadio', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      transclude: true,
      replace : true,
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        value: '@',
        name: '@'
      },
      controller: function () {
        if (angular.isUndefined(this.value)) {
          throw Error('value attribute missing');
        }
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdsradio.html'
    };
  });
})();
