(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiSimpleModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
