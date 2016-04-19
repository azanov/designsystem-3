(function () {
  'use strict';
  angular.module('pb.ds.components').directive('pbdsCheckbox', function ($timeout) {
    return {
      restrict: 'E',
      require: 'ngModel',
      replace: true,
      scope: {},
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        name: '@',
        tipType: '@',
        tipPosition: '@',
        tipTitle: '@',
        tipText: '@'
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
        if (scope.ctrl.tipType === 'popover') {
          scope.ctrl.title = scope.ctrl.tipTitle;
          scope.ctrl.text = scope.ctrl.tipText;
          $timeout(function () {
            $('[data-toggle="popover"]').popover();
          }, 1000);
        } else if (scope.ctrl.tipType === 'tooltip') {
          scope.ctrl.title = scope.ctrl.tipTitle;
          scope.ctrl.text = scope.ctrl.tipTitle;
          $timeout(function () {
            $('[data-toggle="tooltip"]').tooltip();
          }, 1000);
        }
      }
    };
  });
})();
