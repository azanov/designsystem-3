(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiSimpleModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
