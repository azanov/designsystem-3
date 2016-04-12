(function () {
  'use strict';
  var module= angular.module('pb.components');
  module.directive('pbCheckbox',function(){
    return {
      restrict :'E',
      require : 'ngModel',
      scope : true,
      bindToController: {
        disabled : '=',
        ngModel : "=",
        ngChange : "&",
        label : "@",
        name : "@",
        standard : "@"
      },
      controller : function(){
        if(angular.isUndefined(this.standard)){
          this.custom = true;
        }else{
          this.custom = (this.standard=='false');
        }
        console.log('custom',this.label,this.custom,this.standard);
        if(angular.isUndefined(this.label)){
          throw Error('label attribute missing');
        }
        this.onChange = function(){
          this.ngChange({val:this.ngModel});
        }
      },
      controllerAs : 'ctrl',
      template :
      '<label ng-class="{\'control checkbox\':ctrl.custom,\'disabled\':ctrl.disable==\'disabled\'}"> \
        <input name="{{ctrl.name}}" ng-disabled="ctrl.disabled" type="checkbox" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()">\
        <span ng-if="ctrl.custom" class="control-indicator"></span> \
        {{ctrl.label}}\
      </label>'
    }
  });


  module.directive('pbRadio',function(){
    return {
      restrict :'E',
      require : 'ngModel',
      scope : true,
      bindToController: {
        disabled : '=',
        ngModel : "=",
        ngChange : "&",
        label : "@",
        value : "@",
        name : "@",
        standard : "@"
      },
      controller : function(){
        if(angular.isUndefined(this.label)){
          throw Error('label attribute missing');
        }
        if(angular.isUndefined(this.value)){
          throw Error('value attribute missing');
        }

        if(angular.isUndefined(this.disabled)){
          this.disable = false;
        }else{
          this.disable = this.disabled == true ? 'disabled' : false;
        }
        this.custom = angular.isUndefined(this.standard);

        console.log('computed disable',this.disable);
        //this.input = this.ngModel;
        this.onChange = function(){
          this.ngChange({val:this.ngModel});
        }
      },
      controllerAs : 'ctrl',
      template :
      '<label ng-class="{\'control radio\':ctrl.custom,\'disabled\':ctrl.disable==\'disabled\'}"> \
        <input name="{{ctrl.name}}" type="radio" ng-disabled="ctrl.disabled" value="{{ctrl.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()">\
        <span ng-if="ctrl.custom" class="control-indicator"></span> \
        {{ctrl.label}}\
      </label>'
    }
  });

  module.directive('pbRadioGroup',function(){
    return {
      restrict :'E',
      require : 'ngModel',
      scope : true,
      //1.3
      //bindToController : true,
      //1.4
      bindToController: {
        disabled : '=',
        ngModel : "=",
        ngChange : "&",
        options : "=",
        name : "@",
        horizontal : '@'
      },
      controller : function(){
        if(angular.isUndefined(this.disabled)){
          this.disable = false;
        }else{
          this.disable = this.disabled == true ? 'disabled' : false;
        }

        if(angular.isUndefined(this.options)){
          throw Error('options array required');
        }
        var that = this;
        angular.forEach(this.options,function(item){
          if(angular.isUndefined(item.label) || angular.isUndefined(item.value)){
            throw Error('label | value attribute missing');
          }
          if(that.disable=='disabled'){
            item.disabled = true;
          }
        });

        this.onChange = function(){
          this.ngChange({val:this.ngModel});
        }

        console.log('is horizontal',this.horizontal==='true')
      },
      controllerAs : 'ctrl',
      template :
      '<div ng-class="{\'controls-inline\':ctrl.horizontal==true,\'controls-stacked\':!ctrl.horizontal==false}"> \
        <label class="control radio" ng-repeat="item in ctrl.options track by $index"> \
          <input name="{{ctrl.name}}" ng-disabled="item.disabled" type="radio" value="{{item.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()">\
          <span class="control-indicator"></span> \
          {{item.label}} \
      </label></span>'
    }
  });

})();
