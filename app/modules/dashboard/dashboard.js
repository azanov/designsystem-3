/* jshint strict:false */

var pbDashboard = angular.module('pb.dashboard', [
  'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'modules/dashboard/templates/dashboard.html',
    controller: 'DashboardCtrl as db',
    resolve: {
      translate: function($translatePartialLoader) {
        $translatePartialLoader.addPart('/modules/dashboard/i18n');
      },
      navigationResolve: function(navigation) {
        return navigation.get();
      }
    },
    data: {
      pageTitle: 'Dashboard',
      access: 'public',
      className: 'home'
    }
  });
}]);
