(function () {
  'use strict';

  angular.module('pb.ds.cards').config(function ($stateProvider) {
    $stateProvider.state('cards', {
      url: '/cards',
      templateUrl: 'modules/cards/cards.html',
      // abstract: true,
      controller: 'CardsController as cards',
      resolve: {
        PeopleResolve: function ($log, MockDataFactory) {
          return MockDataFactory.query({
            filename: 'people'
          });
        }
      },
      data: {
        pageTitle: 'Cards'
      }
    });
  });
})();
