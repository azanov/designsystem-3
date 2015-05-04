(function() {

  'use strict';

  angular.module('pb.ds.notification').config(function($stateProvider) {
    $stateProvider.state('notification', {
      abstract: true,
      templateUrl: 'modules/notification/templates/notification.html',
      controller: 'NotificationController as notification',
      data: {
        pageTitle: 'Notification',
        access: 'public',
        bodyClass: 'notification'
      }
    })

    .state('notification.toastr', {
      url: '/notification/toastr',
      templateUrl: 'modules/notification/templates/notification-toastr.html',
      controller: 'ToastrController as toastr'
    })

    .state('notification.spinners', {
      url: '/notification/spinners',
      templateUrl: 'modules/notification/templates/notification-spinners.html',
      controller: 'SpinnersController as spinners'
    })

    .state('notification.loadingbar', {
      url: '/notification/loadingbar',
      templateUrl: 'modules/notification/templates/notification-loadingbar.html',
      controller: 'LoadingBarController as loadingbar'
    })

    .state('notification.alerts', {
      url: '/notification/alerts',
      templateUrl: 'modules/notification/templates/notification-alerts.html',
      controller: 'AlertsController as alerts'
    })

    .state('notification.headermessage', {
      url: '/notification/headermessage',
      templateUrl: 'modules/notification/templates/notification-header-message.html',
      controller: 'HeaderMessageController as message'
    });

  });

})();
