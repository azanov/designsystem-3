(function() {

  'use strict';

  angular.module('app').factory('ChartFactory', function($http) {

    return {
      getChartData: function() {
        var chartData = $http.get('scripts/data/flot_example_data.js').then(function(response) {
          return response.data;
        });

        return chartData;
      }
    };

  });

})();
