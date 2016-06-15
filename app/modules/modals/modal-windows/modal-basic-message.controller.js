(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiBasicMessageModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
