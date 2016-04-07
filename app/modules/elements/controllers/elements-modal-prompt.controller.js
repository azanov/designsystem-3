(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiPromptModalController', function ($scope, $uibModalInstance) {
    $scope.fullname = '';

    $scope.close = function () {
      $uibModalInstance.close();
    };

    $scope.save = function () {
      $uibModalInstance.close($scope.form.fullname.$modelValue);
    };
  });
})();
