(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiSimpleModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
