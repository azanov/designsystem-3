'use strict';

angular.module('designSystemApp')
  .controller('FooterCtrl as footerctrl',
    function($scope, $route) {

      var vm = this;

      vm.year = new Date().getFullYear();



    }
  );
