(function () {
  'use strict';

  angular.module('pb.ds.content').config(function ($stateProvider) {
    $stateProvider.state('content', {
      url: '',
      abstract: true,
      templateUrl: 'modules/content/templates/content.html',
      controller: 'ContentController as content',
      data: {
        pageTitle: 'Content',
        access: 'public',
        bodyClass: 'content'
      }
    })

      .state('content.overview', {
        url: '/content/overview',
        templateUrl: 'modules/content/templates/content-overview.html',
        data: {
          pageTitle: 'Content',
          access: 'public',
          bodyClass: 'content'
        }
      })

      .state('content.voice', {
        url: '/content/voice',
        templateUrl: 'modules/content/templates/content-voice.html',
        data: {
          pageTitle: 'Content',
          access: 'public',
          bodyClass: 'content'
        }
      })

      .state('content.style', {
        url: '/content/style',
        templateUrl: 'modules/content/templates/content-style.html',
        data: {
          pageTitle: 'Content',
          access: 'public',
          bodyClass: 'content'
        }
      })

      .state('content.legal', {
        url: '/content/legal',
        templateUrl: 'modules/content/templates/content-legal.html',
        data: {
          pageTitle: 'Content',
          access: 'public',
          bodyClass: 'content'
        }
      })



      .state('content.emails', {
        url: '/content/emails',
        templateUrl: 'modules/content/templates/content-emails.html',
        data: {
          pageTitle: 'Content - Emails',
          access: 'public',
          bodyClass: 'content emails'
        }
      });
  });
})();
