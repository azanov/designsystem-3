(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiRadioButtonsModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
