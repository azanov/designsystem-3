(function() {

  'use strict';

  angular.module('example').factory('ExampleFactory', function($resource) {

    return $resource('core/data/:filename.json', {
      filename: '@filename'
    });

  });

})();
