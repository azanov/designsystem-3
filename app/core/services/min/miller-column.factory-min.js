'use strict';

angular.module('app').factory('millerColumn', ['$http', function($http) {

  var millerColumn = {};

  millerColumn.get = function() {
    return $http.get('core/data/miller_column.json');
  };

  return millerColumn;

}]);


