(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiModalCtrl', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });

})();
