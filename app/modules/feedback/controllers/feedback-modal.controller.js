(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('BootstrapUiModalController', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });

})();
