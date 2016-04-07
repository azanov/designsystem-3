(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiBasicMessageModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
