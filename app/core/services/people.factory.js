(function() {

  'use strict';

  angular.module('app').factory('PeopleFactory', function($http) {

    var PeopleFactory = {};

    PeopleFactory.get = function() {
      return $http.get('core/data/people.json');
    };

    return PeopleFactory;

  });

})();
