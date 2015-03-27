'use strict';

angular.module('app').factory('PeopleFactory', ['$http', function($http) {

  var PeopleFactory = {};

  PeopleFactory.get = function() {
    return $http.get('core/data/people.json');
  };

  return PeopleFactory;

}]);
