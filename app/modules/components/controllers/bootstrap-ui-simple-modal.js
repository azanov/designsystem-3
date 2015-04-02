'use strict';

/**
 * @ngdoc function
 * @name designSystemApp.controller:BootstrapUiSimpleModalCtrl
 * @description
 * # BootstrapUiSimpleModalCtrl
 * Controller of the designSystemApp
 */
angular.module('pb.components')
  .controller('BootstrapUiSimpleModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });


