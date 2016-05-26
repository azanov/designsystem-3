(function () {
  'use strict';
  angular.module('pb.ds.components').directive('pbdsButtonProgress', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: {},
      replace: true,
      transclude: true,
      bindToController: {
        disabled: '=',
        ngModel: '=',
        label: '@',
        loadingMessage: '@',
        iconClass: '@',
        btnClass: '@'
      },
      controller: function ($transclude) {
        var ctrl = this;
        if (angular.isUndefined(ctrl.ngModel)) {
          ctrl.ngModel = false;
        }
        if (angular.isUndefined(ctrl.label)) {
          ctrl.label = 'NO_LABEL';
          if (angular.isUndefined(ctrl.loadingMessage)) {
            ctrl.loadingMessage = ctrl.label;
          }
        }
        if (angular.isUndefined(ctrl.loadingMessage)) {
          ctrl.loadingMessage = ctrl.label;
        }
        if (angular.isUndefined(ctrl.btnClass)) {
          ctrl.btnClass = 'btn btn-default';
        }
        if (angular.isUndefined(ctrl.iconClass)) {
          ctrl.iconClass = 'nc-icon-outline loader_gear';
        }
      },
      controllerAs: 'ctrl',
      template: '<button ng-class="[ctrl.btnClass]" style="white-space:normal;word-wrap:break-word; "><span ng-show="ctrl.ngModel"><i class="spin" ng-class="[ctrl.iconClass]"></i></span> {{ctrl.ngModel ? ctrl.loadingMessage : ctrl.label}}</button>'
    };
  });
})();
