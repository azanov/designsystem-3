'use strict';

angular.module('app').factory('ColorFactory',
  function($http) {

    var colorData;

    return {
      getColors: function() {
        if (!colorData) {
          colorData = $http.get('core/data/colors.json').then(function(response) {
            return response.data;
          });
        }
        return colorData;
      }
    };

  }
);
