(function() {

  'use strict';

  angular.module('pb.signin').config(function($stateProvider) {

    $stateProvider.state('signin', {
      url: '/signin',
      abstract: false,
      templateUrl: 'modules/signin/templates/signin.html',
      controller: 'SigninController as signin',
      data: {
        pageTitle: 'Sign In',
        access: 'public',
        bodyclass: 'signin'
      }
    });

  });

})();
