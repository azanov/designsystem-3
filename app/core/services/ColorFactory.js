'use strict';

angular.module('designSystemApp')
  .factory('ColorFactory', ['$http',
    function($http) {

      var colorData;

      return {
        getColors: function() {
          if (!colorData) {
            colorData = $http.get('scripts/data/colors.json').then(function(response) {
              return response.data;
            });
          }
          return colorData;
        }
      };

    }
  ]);
