/* jshint strict:false */

angular.module('pb.elements', ['ui.router'])

.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('elements', {
    url: '/elements',
    abstract: true,
    templateUrl: 'modules/elements/templates/elements.html',
    controller: 'ElementsCtrl as ec',
    resolve: {
      translate: function($translatePartialLoader){
        $translatePartialLoader.addPart('/modules/elements/i18n');
      },
      people: function(people){
        return people.get();
      },
      navigation: function(navigation){
        return navigation.getSubNav('Elements');
      }
    },
    data: {
      pageTitle: 'Elements',
      access: 'private'
    }
  })
  .state('elements.alerts', {
    url: '/alerts',
    templateUrl: 'modules/elements/templates/elements.alerts.html',
    controller: 'AlertsCtrl as ac'
  })
  .state('elements.buttons', {
    url: '/buttons',
    templateUrl: 'modules/elements/templates/elements.buttons.html'
  })
  .state('elements.colors', {
    url: '/colors',
    templateUrl: 'modules/elements/templates/elements.colors.html',
    controller: 'ColorsCtrl'
  })
  .state('elements.grid', {
    url: '/grid',
    templateUrl: 'modules/elements/templates/elements.grid.html'
  })
  .state('elements.icons', {
    url: '/icons',
    templateUrl: 'modules/elements/templates/elements.icons.html',
    controller: 'IconsCtrl as ic',
    resolve: {
      faIcons: function(fontawesome){
        return fontawesome.get();
      }
    }
  })
  .state('elements.inputs', {
    url: '/inputs',
    templateUrl: 'modules/elements/templates/elements.inputs.html',
    controller: 'InputsCtrl as ic',
    resolve: {
      countriesList: function(countries){
        return countries.get();
      }
    }
  })
  .state('elements.popovers', {
    url: '/popovers',
    templateUrl: 'modules/elements/templates/elements.popovers.html'
  })
  .state('elements.progress', {
    url: '/progress',
    templateUrl: 'modules/elements/templates/elements.progress.html',
    controller: 'ProgressCtrl as pc'
  })
  .state('elements.tables', {
    url: '/tables',
    templateUrl: 'modules/elements/templates/elements.tables.html'
  })
  .state('elements.typography', {
    url: '/typography',
    templateUrl: 'modules/elements/templates/elements.typography.html'
  })
  ;
}]);
