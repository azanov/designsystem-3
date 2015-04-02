'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiModalCtrl
 * @description
 * # BootstrapUiModalCtrl
 * Controller of the designSystemApp
 */
angular.module('pb.components')
  .controller('BootstrapUiModalCtrl', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });
