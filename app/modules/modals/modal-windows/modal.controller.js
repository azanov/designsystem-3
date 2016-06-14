(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
