(function () {
  'use strict';
  var module = angular.module('pb.ds.components');
  module.directive('pbdsStepper', function ($window) {
    return {
      restrict: 'E',
      require: ['^ngModel', '^form'],
      scope: {},
      bindToController: {
        ngModel: '=',
        ngChange: '&',
        name: '@',
        min: '@',
        max: '@',
        step: '@',
        type: '@'
      },
      controller: function () {
        if (angular.isUndefined(this.type)) {
          this.type = 0;
        }
        if (angular.isUndefined(this.min)) {
          this.min = $window.NEGATIVE_INFINITY;
        }
        if (angular.isUndefined(this.max)) {
          this.min = $window.POSITIVE_INFINITY;
        }
        this.onChange = function () {
          this.ngChange({val: this.ngModel});
        };
        this.decrement = function () {
          if (this.ngModel > this.min) {
            this.ngModel = this.toFixed(parseFloat(this.ngModel) - parseFloat(this.step));
            this.onChange();
          }
        };
        this.increment = function () {
          if (this.ngModel < this.max) {
            this.ngModel = this.toFixed(parseFloat(this.ngModel) + parseFloat(this.step));
            this.onChange();
          }
        };
        this.toFixed = function (num) {
          return +(num.toFixed(2));
        };
      },
      controllerAs: 'ctrl',
      template: '<div ng-if="ctrl.type==0" class="btn-group" role="group"><button class="btn btn-default" ng-click="ctrl.decrement()">-</button><button class="btn btn-default">{{ ctrl.ngModel }}</button><button class="btn btn-default" ng-click="ctrl.increment()">+</button></div>' +
      '<input ng-if="ctrl.type !=0" class="form-control" type="number" step="{{ ctrl.step }}" ng-model-options="{ allowInvalid: false, debounce: { \'default\': 0 } }" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()" ng-attr-min="{{ctrl.min}}" ng-attr-max="{{ctrl.max}}"/>',
      link: function (scope, elem, attrs, ngModelCtrls) {
        var ngModel = ngModelCtrls[0];
        var formModel = ngModelCtrls[1];
        if (scope.ctrl.type==0) {
          ngModel.$validators.min = function (modelValue, viewValue) {
            var value = modelValue || viewValue;
            if (value < scope.ctrl.min ) {
              return false;
            } else {
              return true;
            }
          };
          ngModel.$validators.max = function (modelValue, viewValue) {
            var value = modelValue || viewValue;
            if (value > scope.ctrl.max) {
              return false;
            } else {
              return true;
            }
          };
        }
      }

    };
  });
})();
