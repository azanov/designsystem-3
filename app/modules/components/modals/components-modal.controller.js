(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiModalController', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });

})();
