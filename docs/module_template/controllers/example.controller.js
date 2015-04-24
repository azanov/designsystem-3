(function() {

  'use strict';

  angular.module('example').controller('ExampleController', function($log, ExampleResolve, ExampleFactory) {

    var _this = this;

    _this.example = ExampleResolve;

    _this.something = ExampleFactory.query({key: 'value'});

  });

})();
