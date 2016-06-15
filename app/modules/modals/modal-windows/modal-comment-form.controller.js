(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('BootstrapUiCommentFormModalController', function ($scope, $uibModalInstance) {
    $scope.close = function () {
      $uibModalInstance.close();
    };
  });
})();
