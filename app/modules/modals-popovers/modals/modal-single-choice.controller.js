(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiSingleChoiceModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
