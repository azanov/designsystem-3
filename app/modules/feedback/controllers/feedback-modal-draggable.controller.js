(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('BootstrapUiDraggableModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
