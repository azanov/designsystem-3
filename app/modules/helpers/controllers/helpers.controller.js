(function() {

  'use strict';

  angular.module('pb.ds.helpers').controller('HelpersController', function($log) {

    var _this = this;

    _this.spacers = {
      top: {
        values: ['no top spacer', 'spacer-top-xs (10px)', 'spacer-top-sm (20px)', 'spacer-top-md (30px)', 'spacer-top-lg (40px)', 'spacer-top-xl (50px)'],
        selected: 'spacer-top-sm (20px)'
      },
      bottom: {
        values: ['no bottom spacer', 'spacer-bottom-xs (10px)','spacer-bottom-sm (20px)', 'spacer-bottom-md (30px)', 'spacer-bottom-lg (40px)', 'spacer-bottom-xl (50px)'],
        selected: 'spacer-bottom-sm (20px)'
      }
    };

  });

})();
