(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiSimpleModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
