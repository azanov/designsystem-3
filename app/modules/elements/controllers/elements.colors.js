'use strict';

angular.module('pb.elements')
  .controller('ColorsCtrl', function($scope, $log, ColorFactory) {

    ColorFactory.getColors().then(function(response) {
      $scope.colorData = response.colors;

    });

  });
