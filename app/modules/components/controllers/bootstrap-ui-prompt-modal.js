(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiPromptModalCtrl', function($scope, $modalInstance) {

    $scope.fullname = '';

    $scope.close = function() {
      $modalInstance.close();
    };

    $scope.save = function() {
      console.log($scope);
      console.log($scope.form.fullname.$modelValue);
      $modalInstance.close($scope.form.fullname.$modelValue);
    };

  });

})();
