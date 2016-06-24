(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiSingleChoiceModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
