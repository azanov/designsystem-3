(function() {

  'use strict';

  angular.module('app').factory('countries', function($http) {

    var countries = {};

    countries.get = function() {
      return $http.get('core/data/countries.json');
    };

    return countries;

  });

})();
