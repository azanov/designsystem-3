(function() {

  'use strict';

  angular.module('app').factory('millerColumn', function($http) {

    var millerColumn = {};

    millerColumn.get = function() {
      return $http.get('core/data/miller_column.json');
    };

    return millerColumn;

  });

})();
