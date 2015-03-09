'use strict';

angular.module('app').factory('countries', ['$http', function($http) {

  var countries = {};

  countries.get = function(){
    return $http.get('core/data/countries.json');
  };

  return countries;

}]);
