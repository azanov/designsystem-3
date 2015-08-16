(function() {

  'use strict';

  angular.module('pb.ds.patterns').config(function($stateProvider) {
    $stateProvider.state('patterns', {
      url: '/patterns',
      templateUrl: 'modules/patterns/templates/patterns.html',
      controller: 'PrinciplesController as patterns',
      data: {
        pageTitle: 'Principles - Design Philosophy',
        access: 'public',
        bodyClass: 'patterns'
      }
    })


    .state('patterns.headersfooters', {
      url: '/headersfooters',
      templateUrl: 'modules/patterns/templates/headers-footers.html',
      controller: 'PrinciplesController as patterns',
      data: {
        pageTitle: 'Principles - Design Philosophy',
        access: 'public',
        bodyClass: 'patterns'
      }
    })


    .state('patterns.signin', {
      url: '/patterns/signin',
      templateUrl: 'modules/patterns/templates/signin.html',
      controller: 'SignInController as signin'
    })
    .state('patterns.forgotpassword', {
      url: '/patterns/forgotpassword',
      templateUrl: 'modules/patterns/templates/forgot-password.html',
      controller: 'ForgotPasswordController as forgot'
    })
    .state('patterns.welcome', {
      url: '/patterns/welcome',
      templateUrl: 'modules/patterns/templates/welcome.html',
      controller: 'WelcomeController as welcome'
    })
    .state('patterns.registration', {
      url: '/patterns/registration',
      templateUrl: 'modules/patterns/templates/registration.html',
      controller: 'RegistrationController as registration'
    })
    .state('patterns.undermaintenance', {
      url: '/patterns/undermaintenance',
      templateUrl: 'modules/patterns/templates/under-maintenance.html',
      controller: 'UnderMaintenanceController as under'
    })
    .state('patterns.500', {
      url: '/patterns/500',
      templateUrl: 'modules/patterns/templates/500.html',
      controller: '500Controller'
    })
    .state('patterns.404', {
      url: '/patterns/404',
      templateUrl: 'modules/patterns/templates/404.html',
      controller: '404Controller'
    });



  });

})();
