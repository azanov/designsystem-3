'use strict';

angular.module('app').factory('fontawesome', ['$http', function($http) {

  var fa = {};

  fa.get = function(){
    return $http.get('core/data/fontawesome.json');
  };

  return fa;

}]);
