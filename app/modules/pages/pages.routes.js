(function() {

  'use strict';
  angular.module('pb.ds.pages').config(function($stateProvider) {
    $stateProvider.state('pages', {
        abstract: true,
        templateUrl: 'modules/pages/templates/pages.html',
        controller: 'PagesController as pages',
        data: {
          pageTitle: 'Pages',
          access: 'public',
          bodyClass: 'signin'
        }
      })
      .state('pages.signin', {
        url: '/pages/signin',
        templateUrl: 'modules/pages/templates/signin.html',
        controller: 'SignInController as signin'
      })
      .state('pages.forgotpassword', {
        url: '/pages/forgotpassword',
        templateUrl: 'modules/pages/templates/forgot-password.html',
        controller: 'ForgotPasswordController as forgot'
      })
      .state('pages.welcome', {
        url: '/pages/welcome',
        templateUrl: 'modules/pages/templates/welcome.html',
        controller: 'WelcomeController as welcome'
      })
      .state('pages.registration', {
        url: '/pages/registration',
        templateUrl: 'modules/pages/templates/registration.html',
        controller: 'RegistrationController as registration'
      })
      .state('pages.undermaintenance', {
        url: '/pages/undermaintenance',
        templateUrl: 'modules/pages/templates/under-maintenance.html',
        controller: 'UnderMaintenanceController as under'
      })
      .state('pages.500', {
        url: '/pages/500',
        templateUrl: 'modules/pages/templates/500.html',
        controller: '500Controller'
      })
      .state('pages.404', {
        url: '/pages/404',
        templateUrl: 'modules/pages/templates/404.html',
        controller: '404Controller'
      });
  });

})();
