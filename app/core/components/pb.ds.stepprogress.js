(function () {
    'use strict';
    var module = angular.module('pb.ds.components');
    module.directive('pbdsStepprogress', function ($window) {
        return {
        restrict: 'E',
        require : '^ngModel',
        scope: {},
        template : '<div class="progress-meter"><div class="track"><span class="progress" style="border-radius: 0" ng-style="{\'width\':ctrl.width}"></span></div><ul class="progress-points"><li ng-repeat="prop in ctrl.props track by $index" class="progress-point" ng-class="{\'active\':prop==ctrl.currentProp,\'completed\':$index<=ctrl.currentModelIndex}" ng-attr-style="left:{{ ctrl.computeLeft($index)}};width:{{ ctrl.computeWidth($index)}}" ng-click1="ctrl.updateProgress($index)"> <span class="circle-icon" ng-class="{\'circle-icon-active\':$index<=ctrl.currentModelIndex,\'step-terminal\':$last,\'step-start\':$first}"></span><div class="pull-left vertical-text" style="margin-top: 20px;font-size: smaller">{{ prop.label }}</div> </li> </ul> </div>',
        bindToController: {
            ngModel: '=',
            ngChange: '&',
            props : "="
        },
        controllerAs: 'ctrl',
        controller: function () {

            var ctrl = this;

            ctrl.currentModelIndex = 0;

            ctrl.max = ctrl.props.length-1;

            ctrl.min = 0;

            ctrl.updateProgress = function(prop,index){
                ctrl.currentModelIndex = index;
                ctrl.width = (ctrl.currentModelIndex / ctrl.max * 100) + "%";
            }

            ctrl.computeLeft = function(index){
                return (index / ctrl.max)*100 + '%';
            }

            ctrl.computeWidth = function(index){
                return ((1) / ctrl.max)*100 + '%';
            }
        },
        link : function(scope,elem,attrs,ngModel){
            scope.$watch('ctrl.ngModel',function(n,o){
                angular.forEach(scope.ctrl.props,function(prop,index){
                    if(prop === scope.ctrl.ngModel){
                        scope.ctrl.updateProgress(prop,index);
                    }
                });
            })
        }
        }
    });
})();