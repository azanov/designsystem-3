(function() {

  'use strict';

  angular.module('app').factory('FontawesomeFactory', function($http) {

    var FontawesomeFactory = {};

    FontawesomeFactory.get = function() {
      return $http.get('core/data/fontawesome.json');
    };

    return FontawesomeFactory;

  });

})();
