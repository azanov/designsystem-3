(function() {

  'use strict';

  angular.module('app', [
    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.ds.hamburger'
  ]);

  //angular scroll configuration
  angular.module('app').value('duScrollDuration', 750);
  angular.module('app').value('duScrollOffset', 125);
  angular.module('app').value('duScrollGreedy', true);



  // UI ROUTER CONFIG
  angular.module('app').config(function($stateProvider) {
    $stateProvider.state('weblanding', {
        url: '/web',
        templateUrl: 'modules/main/templates/web.html',
        controller: 'SectionLandingController as SLC',
        resolve: {
          NavigationResolve: function($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'navigation'
            });
          }
        },
        data: {
          pageTitle: 'Web',
          access: 'public',
          bodyClass: 'web sectionlanding'
        }
      })
      .state('mobilelanding', {
        url: '/mobile',
        templateUrl: 'modules/main/templates/mobile.html',
        controller: 'SectionLandingController as SLC',
        resolve: {
          NavigationResolve: function($log, MockDataFactory) {
            return MockDataFactory.query({
              filename: 'navigation'
            });
          }
        },
        data: {
          pageTitle: 'Mobile',
          access: 'public',
          bodyClass: 'mobile sectionlanding'
        }
      })
      .state('otherwise', {
        url: '*path',
        template: '',
        controller: function($state) {
          $state.go('home');
        }
      });
  });

  // highlight.js configuration
  angular.module('app').config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      languages: ['html', 'css', 'js', 'xml', 'json']
    });
  });





})();
