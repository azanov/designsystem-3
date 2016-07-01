(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiDraggableModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
