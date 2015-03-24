'use strict';

angular.module('app')
  .controller('ColorsCtrl', function($scope, $log, ColorFactory) {

    ColorFactory.getColors().then(function(response) {
      $scope.colorData = response.colors;

    });

  });


