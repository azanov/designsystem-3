(function () {
  'use strict';
  angular.module('pb.ds.components').directive('pbdsCheckbox', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      transclude: true,
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        name: '@'
      },
      controller: function () {
        this.onChange = function () {
          this.ngChange({val: this.ngModel});
        };
        if (angular.isUndefined(this.ngModel)) {
          this.ngModel = false;
        }
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdscheckbox.html'
    };
  });
})();
