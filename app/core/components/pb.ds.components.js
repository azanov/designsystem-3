(function () {
  'use strict';
  angular.module('pb.ds.components', []);
  angular.module('pb.ds.components').run(function ($templateCache) {
    var pbDsCheckBoxTemplate = '<label ng-required="ctrl.required" ng-class="{\'control checkbox\':!ctrl.native,\'disabled\':ctrl.disabled}"><input name="{{ctrl.name}}" ng-disabled="ctrl.disabled" type="checkbox" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()"><span ng-if="!ctrl.native" class="control-indicator"></span> {{ctrl.label}} <button ng-if="ctrl.tipType" style="border: none" data-trigger="focus" class="btn btn-default btn-sm" ng-attr-data-toggle="{{ ctrl.tipType }}" ng-attr-data-placement="{{ctrl.tipPosition }}" ng-attr-title="{{ ctrl.title }}" ng-attr-data-content="{{ ctrl.text }}" ><i class="fa fa-question-circle"></i></button></label>';
    $templateCache.put('pbdscheckbox.html', pbDsCheckBoxTemplate);
    var pbDsRadioTemplate = '<label ng-class="{\'control radio\':!ctrl.native,\'disabled\':ctrl.disabled}"><input name="{{ctrl.name}}" type="radio" ng-disabled="ctrl.disabled" value="{{ctrl.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()"><span ng-if="!ctrl.native" class="control-indicator"></span> {{ctrl.label}} <button ng-if="ctrl.tipType" style="border: none" type="button" class="btn btn-default btn-sm" ng-attr-data-toggle="{{ ctrl.tipType }}" ng-attr-data-placement="{{ctrl.tipPosition }}" ng-attr-title="{{ ctrl.title }}" ng-attr-data-content="{{ ctrl.text }}"><i class="fa fa-question-circle"></i></button></label>';
    $templateCache.put('pbdsradio.html', pbDsRadioTemplate);
  });
})();
