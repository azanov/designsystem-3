(function() {

  'use strict';

  angular.module('pb.ds.example').config(function($stateProvider) {
    $stateProvider.state('example', {
      url: '/example',
      templateUrl: 'modules/example/templates/example.html',
      controller: 'ExampleController as example',
      resolve: {
        ExampleResolve: function(ExampleFactory) {
          return ExampleFactory.query({key: 'value'}, function(response) {
            return response.data;
          });
        }
      },
      data: {
        pageTitle: 'Example',
        access: 'private',
        bodyClass: 'classname1 classname2'
      }
    });
  });

})();
