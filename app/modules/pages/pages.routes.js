(function () {

  'use strict';

  angular.module('pb.ds.pages').config(function ($stateProvider) {
    $stateProvider.state('signin', {
      url: '/signin',
      templateURL: 'modules/pages/templates/signin.html',
      controller: 'SignInController as signin',
      data: {
        pageTitle: 'Sign In',
        access: 'public',
        bodyclass: 'signin'
      }
    })
    .state('forgotpassword', {
      url: '/forgotpassword',
      templateURL: 'modules/pages/templates/forgotpassword.html',
      controller: 'ForgotPasswordController as forgot',
      data: {
        pageTitle: 'Forgot Password',
        access: 'public',
        bodyclass: 'signin'
      }
    });
  });



})();
