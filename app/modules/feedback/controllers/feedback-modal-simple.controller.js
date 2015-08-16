(function() {

  'use strict';

  angular.module('pb.ds.feedback').controller('BootstrapUiSimpleModalController', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();
