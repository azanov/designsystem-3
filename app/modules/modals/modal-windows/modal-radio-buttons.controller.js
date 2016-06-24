(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiRadioButtonsModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
