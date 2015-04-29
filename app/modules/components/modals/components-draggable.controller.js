(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiDraggableModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
