(function () {
  'use strict';
  angular.module('pb.ds.components', []);
  angular.module('pb.ds.components').run(function ($templateCache) {
    var pbDsCheckBoxTemplate = '<span class="pbds-checkbox"><label class="control checkbox" ng-required="ctrl.required" ng-class="{\'disabled\':ctrl.disabled}"><input name="{{ctrl.name}}" ng-disabled="ctrl.disabled" type="checkbox" ng-model="ctrl.ngModel" ng-change="ctrl.ngChange({val:ctrl.ngModel})"><span class="control-indicator"></span> {{ctrl.label}} </label><span ng-transclude></span></span>';
    $templateCache.put('pbdscheckbox.html', pbDsCheckBoxTemplate);
    var pbDsRadioTemplate = '<span class="pbds-radiobutton"><label class="control radio" ng-class="{\'disabled\':ctrl.disabled}"><input name="{{ctrl.name}}" type="radio" ng-disabled="ctrl.disabled" value="{{ctrl.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.ngChange({val:ctrl.ngModel})()"><span class="control-indicator"></span> {{ctrl.label}}</label><span ng-transclude></span></span>';
    $templateCache.put('pbdsradio.html', pbDsRadioTemplate);
  });
})();
