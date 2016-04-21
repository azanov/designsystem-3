(function () {
  'use strict';
  var module = angular.module('pb.ds.components');
  module.directive('pbdsRadio', function ($timeout) {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      transclude : true,
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        value: '@',
        name: '@'
      },
      controller: function () {
        if (angular.isUndefined(this.label)) {
          // throw Error('label attribute missing');
        }
        if (angular.isUndefined(this.value)) {
          throw Error('value attribute missing');
        }
        this.onChange = function () {
          this.ngChange({val: this.ngModel});
        };
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdsradio.html'
    };
  });
})();
