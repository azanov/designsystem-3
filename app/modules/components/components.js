/* jshint strict:false */

angular.module('pb.components', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('components', {
    url: '/components',
    abstract: true,
    templateUrl: 'modules/components/templates/components.html',
    controller: 'ComponentsCtrl as cc',
    resolve: {
      translate: function($translatePartialLoader) {
        $translatePartialLoader.addPart('/modules/components/i18n');
      }
    },
    data: {
      pageTitle: 'Components',
      access: 'private'
    }
  })
  .state('components.accordion', {
    url: '/accordion',
    templateUrl: 'modules/components/templates/components.accordion.html',
    controller: 'AccordionCtrl as ac'
  })
  .state('components.panels', {
    url: '/panels',
    templateUrl: 'modules/components/templates/components.panels.html',
    controller: 'PanelsCtrl as pc',
    resolve: {
      people: function(PeopleFactory) {
        return PeopleFactory.get();
      },
      millerColumn: function(millerColumn) {
        return millerColumn.get();
      }
    }
  })
  .state('components.tabs', {
    url: '/tabs',
    templateUrl: 'modules/components/templates/components.tabs.html',
    controller: 'TabsCtrl as tc'
  })
  .state('components.kendoui', {
    url: '/kendoui',
    templateUrl: 'modules/components/templates/components.kendoui.html',
    controller: 'KendoUICtrl as kc'
  })
  .state('components.uibootstrap', {
    url: '/uibootstrap',
    templateUrl: 'modules/components/templates/components.uibootstrap.html',
    controller: 'UIBootstrapCtrl'
  })
  ;
}]);
