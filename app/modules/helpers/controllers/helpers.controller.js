(function() {

  'use strict';

  angular.module('pb.ds.helpers').controller('HelpersController', function($log) {

    var _this = this;

    _this.spacers = {
      top: {
        values: ['no top spacer', 'spacer-top-xs', 'spacer-top-sm', 'spacer-top-md', 'spacer-top-lg', 'spacer-top-xl'],
        selected: 'spacer-top-sm'
      },
      bottom: {
        values: ['no bottom spacer', 'spacer-bottom-xs','spacer-bottom-sm', 'spacer-bottom-md', 'spacer-bottom-lg', 'spacer-bottom-xl'],
        selected: 'spacer-bottom-sm'
      }
    };

  });

})();
