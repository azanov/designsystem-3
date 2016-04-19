(function () {
  'use strict';
  var module = angular.module('pb.ds.components');
  module.directive('pbdsRadio', function ($timeout) {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      bindToController: {
        disabled: '=',
        ngModel: '=',
        ngChange: '&',
        label: '@',
        value: '@',
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
        if (angular.isUndefined(this.value)) {
          throw Error('value attribute missing');
        }

        if (angular.isUndefined(this.disabled)) {
          this.disable = false;
        } else {
          this.disable = this.disabled === true ? 'disabled' : false;
        }
        this.onChange = function () {
          this.ngChange({val: this.ngModel});
        };
      },
      controllerAs: 'ctrl',
      templateUrl: 'pbdsradio.html',
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
  //module.directive('pbdsRadioGroup', function ($timeout) {
  //  return {
  //    restrict: 'E',
  //    require: 'ngModel',
  //    scope: {},
  //    bindToController: {
  //      ngModel: '=',
  //      ngChange: '&',
  //      options: '=',
  //      name: '@',
  //      tipType: '@',
  //      tipPosition: '@',
  //      tipTitle: '@',
  //      tipText: '@'
  //    },
  //    controller: function () {
  //      if (angular.isUndefined(this['options'])) {
  //        throw Error('options array required');
  //      }
  //      angular.forEach(this['options'], function (item) {
  //        if (angular.isUndefined(item.label) || angular.isUndefined(item.value)) {
  //          throw Error('label | value attribute missing');
  //        }
  //      });
  //
  //      this.onChange = function () {
  //        this.ngChange({val: this.ngModel});
  //      };
  //    },
  //    controllerAs: 'ctrl',
  //    templateUrl: 'pbdsradiogroup.html',
  //    link: function (scope, elem, attrs) {
  //      scope.ctrl.native = 'native' in attrs;
  //      scope.ctrl.horizontal = 'horizontal' in attrs;
  //      if (scope.ctrl.tipType === 'popover') {
  //        scope.ctrl.title = scope.ctrl.tipTitle;
  //        scope.ctrl.text = scope.ctrl.tipText;
  //      }else{
  //        scope.ctrl.title = scope.ctrl.tipTitle;
  //        scope.ctrl.text = scope.ctrl.tipText;
  //      }
  //      $timeout(function () {
  //        $('[data-toggle="tooltip"]').tooltip();
  //        $('[data-toggle="popover"]').popover();
  //      }, 1000);
  //    }
  //  };
  //});
})();
