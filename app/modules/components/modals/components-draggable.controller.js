(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiDraggableModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
