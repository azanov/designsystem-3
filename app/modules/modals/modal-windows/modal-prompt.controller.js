(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiPromptModalController', function ($scope, $uibModalInstance) {
    $scope.fullname = '';

    $scope.close = function () {
      $uibModalInstance.close();
    };

    $scope.save = function () {
      $uibModalInstance.close($scope.form.fullname.$modelValue);
    };
  });
})();
