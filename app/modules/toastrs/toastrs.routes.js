(function () {
  'use strict';

  angular.module('pb.ds.toastrs').config(function ($stateProvider) {
    $stateProvider.state('toastrs', {
      url: '/toastrs',
      templateUrl: 'modules/toastrs/toastrs.html',
      // abstract: true,
      controller: 'ToastrsController as toastrs',
      data: {
        pageTitle: 'Toastrs'
      }
    });
  });
})();
