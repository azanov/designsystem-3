(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiWithCopyModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
