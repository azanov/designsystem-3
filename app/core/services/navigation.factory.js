'use strict';

angular.module('app')
.factory('navigation', ['$log','$http', function($log, $http) {

  var navigation = {};

  navigation.get = function(){
    return $http.get('core/data/navigation.json');
  };

  navigation.getSubNav = function(subnav){
    return navigation.get().then(function(response){

      var sub = {};

      angular.forEach(response.data.nav, function(v, k) {
        if (angular.lowercase(v.label) === angular.lowercase(subnav)) {
          sub = v;
        }
      });

      return sub;

    });
  };

  return navigation;

}]);
