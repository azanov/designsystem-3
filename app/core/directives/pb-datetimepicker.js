'use strict';

/**
* @ngdoc directive
* @name app.directive:pbDatetimepicker
* @description
* # pbDatetimepicker
*/
angular.module('app')
.directive('pbDatetimepicker', function() {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    link: function postLink(scope, element, attrs, ngModel) {
      element.datetimepicker(scope.ngModel);
    }
  };
});
