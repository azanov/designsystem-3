(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiDraggableModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
