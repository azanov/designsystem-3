(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
