(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiCommentFormModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
