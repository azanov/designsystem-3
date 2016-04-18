(function () {
  'use strict';
  angular.module('pb.ds.components').directive('pbdsCheckbox', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        name: '@'
      },
      controller: function () {
        if (angular.isUndefined(this.label)) {
          throw Error('label attribute missing');
        }
        this.onChange = function () {
          this.ngChange({val: this.ngModel});
        };
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdscheckbox.html',
      link: function (scope, elem, attrs) {
        scope.ctrl.native = 'native' in attrs;
      }
    };
  });
})();
