(function() {

  'use strict';

  angular.module('pb.ds.foundation').config(function($stateProvider) {
    $stateProvider.state('foundation', {
      abstract: true,
      url: '/foundation',
      templateUrl: 'modules/foundation/templates/foundation.html',
      controller: 'foundationController as foundation',
      data: {
        pageTitle: 'foundation',
        access: 'public',
        bodyClass: 'foundation'
      }
    })


    .state('foundation.color', {
      url: '/color',
      templateUrl: 'modules/foundation/templates/foundation-color.html',
      data: {
        pageTitle: 'Foundation - Colors',
        bodyClass: 'colors'
      }
    })

    .state('foundation.accessibility', {
      url: '/accessibility',
      templateUrl: 'modules/foundation/templates/foundation-accessibility.html',
      data: {
        pageTitle: 'Foundation - Accessibility',
        bodyClass: 'colors'
      }
    })



    .state('foundation.typography', {
      url: '/typography',
      templateUrl: 'modules/foundation/templates/foundation-typography.html',
      controller: 'TypographyController as type',
      data: {
        pageTitle: 'Foundation - Typography'
      }
    })

    .state('foundation.iconography', {
      url: '/iconography',
      templateUrl: 'modules/foundation/templates/foundation-iconography.html',
      controller: 'IconographyController as icons',
      resolve: {
        IconsResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'fontawesome'
          });
        }
      },
      data: {
        pageTitle: 'Foundation - Iconography'
      }
    })

    .state('foundation.grid', {
      url: '/font',
      templateUrl: 'modules/foundation/templates/foundation-grid.html',
      data: {
        pageTitle: 'Foundation - Grid'
      }
    })

    .state('foundation.writing', {
      abstract: true,
      url: '/writing',
      templateUrl: 'modules/foundation/templates/foundation-writing.html',
      controller: 'WritingController as writing',
      data: {
        pageTitle: 'Foundation - Writing'
      }
    })

    .state('foundation.writing.page', {
      url: '',
      views: {
        overview: {
          templateUrl: 'modules/foundation/templates/foundation-writing-overview.html'
        },
        voice: {
          templateUrl: 'modules/foundation/templates/foundation-writing-voice.html'
        },
        style: {
          templateUrl: 'modules/foundation/templates/foundation-writing-style.html'
        },
        terminology: {
          templateUrl: 'modules/foundation/templates/foundation-writing-terminology.html'
        }
      }
    })

    .state('foundation.animation', {
      abstract: true,
      url: '/animation',
      templateUrl: 'modules/foundation/templates/foundation-animation.html',
      //controller: 'AnimationsController as animations',
      data: {
        pageTitle: 'Foundation - Animation'
      }
    })

    .state('foundation.animation.page', {
      url: '',
      views: {
        link1: {
          templateUrl: 'modules/foundation/templates/foundation-animation-link1.html'
        } //,
        // link2: {
        //   templateUrl: 'modules/foundation/templates/foundation-animations-link2.html'
        // },
        // link3: {
        //   templateUrl: 'modules/foundation/templates/foundation-animations-link3.html'
        // },
        // link4: {
        //   templateUrl: 'modules/foundation/templates/foundation-animations-link4.html'
        // }
      }
    });

  });

})();
