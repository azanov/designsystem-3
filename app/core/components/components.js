(function () {
  'use strict';
  angular.module('pb.components', []);
  angular.module('pb.components').run(function ($templateCache) {
    var pbDsCheckBoxTemplate = '<label ng-class="{\'control checkbox\':ctrl.native==true,\'disabled\':ctrl.disable==\'disabled\'}"><input name="{{ctrl.name}}" ng-disabled="ctrl.disabled" type="checkbox" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()"><span ng-if="ctrl.native==true" class="control-indicator"></span> {{ctrl.label}}</label>';
    $templateCache.put('pbdscheckbox.html', pbDsCheckBoxTemplate);

    var pbDsRadioTemplate = '<label ng-class="{\'control radio\':!ctrl.native,\'disabled\':ctrl.disable==\'disabled\'}"><input name="{{ctrl.name}}" type="radio" ng-disabled="ctrl.disabled" value="{{ctrl.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()"><span ng-if="!ctrl.native" class="control-indicator"></span> {{ctrl.label}}</label>';
    $templateCache.put('pbdsradio.html', pbDsRadioTemplate);

    var pbDsRadioGroupTemplate = '<div ng-class="{\'controls-inline\':ctrl.horizontal,\'controls-stacked\':!ctrl.horizontal}"><label class="control radio" ng-repeat="item in ctrl.options track by $index"><input name="{{ctrl.name}}" ng-disabled="item.disabled" type="radio" value="{{item.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()"><span class="control-indicator"></span> {{item.label}}</label></span>';
    $templateCache.put('pbdsradiogroup.html', pbDsRadioGroupTemplate);
  });
})();
