'use strict';

angular.module('pb.elements')
.controller('ProgressCtrl', ['$log','$timeout', 'cfpLoadingBar', function($log, $timeout, cfpLoadingBar) {

  var ctrl = this;

  //TODO: range slider, maybe use these instead:
  //https://github.com/seiyria/angular-bootstrap-slider
  //https://github.com/seiyria/bootstrap-slider
  

  ctrl.startProgress = function(){
    cfpLoadingBar.start();
    $timeout(function() {
      cfpLoadingBar.complete();
    }, 4000);
  };

  ctrl.buttonLoading = {
    isLoading: false,
    text: 'Saving',
    load: function() {
      ctrl.buttonLoading.isLoading = true;
      $timeout(function() {
        ctrl.buttonLoading.isLoading = false;
      }, 2000);
    }
  };

  ctrl.buttonLoading2 = {
    isLoading: false,
    text: 'Updating',
    speed: 0.75,
    iconClass: 'fa-refresh',
    load: function() {
      ctrl.buttonLoading2.isLoading = true;
      $timeout(function() {
        ctrl.buttonLoading2.isLoading = false;
      }, 3000);
    }
  };


}]);
