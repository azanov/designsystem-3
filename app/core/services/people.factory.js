'use strict';

angular.module('app').factory('people', ['$http', function($http) {

  var people = {};

  people.get = function(){
    return $http.get('core/data/people.json');
  };

  return people;

}]);
