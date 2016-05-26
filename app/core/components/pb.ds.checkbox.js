(function () {
  'use strict';
  angular.module('pb.ds.components').directive('pbdsCheckbox', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      replace: true,
      transclude: true,
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        name: '@'
      },
      controller: function () {
        if (angular.isUndefined(this.ngModel)) {
          this.ngModel = false;
        }
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdscheckbox.html'
    };
  });
})();
