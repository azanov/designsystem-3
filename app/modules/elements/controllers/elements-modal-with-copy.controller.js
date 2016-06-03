(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiWithCopyModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
