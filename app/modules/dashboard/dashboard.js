/* jshint strict:false */

angular.module('pb.dashboard', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'modules/dashboard/templates/dashboard.html',
    controller: 'DashboardCtrl as db',
    resolve: {
      translate: function($translatePartialLoader) {
        $translatePartialLoader.addPart('/modules/dashboard/i18n');
      }
    },
    data: {
      pageTitle: 'Dashboard',
      access: 'public',
      className: 'home'
    }
  });
});
