/* jshint strict:false */

angular.module('pb.signin', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('signin', {
      url: '/signin',
      abstract: false,
      templateUrl: 'modules/signin/templates/signin.html',
      controller: 'SigninCtrl as signin',
      data: {
        pageTitle: 'Sign In',
        access: 'public'
      }
    });
    // .state('elements.alerts', {
    //   url: '/alerts',
    //   templateUrl: 'modules/elements/templates/elements.alerts.html',
    //   controller: 'AlertsCtrl as ac'
    // })
}]);
