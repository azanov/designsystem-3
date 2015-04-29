(function() {

  'use strict';

  angular.module('app').directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/header.html',
      controller: 'HeaderController as header'
    };
  });

})();
