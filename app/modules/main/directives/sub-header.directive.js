(function() {

  'use strict';

  angular.module('app').directive('subHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/sub-header.html',
      controller: 'SubHeaderController as subHeader'
    };
  });

})();
