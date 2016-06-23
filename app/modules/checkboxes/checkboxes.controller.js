(function () {
  'use strict';

  angular.module('pb.ds.checkboxes').controller('CheckboxesController', function ($log) {
    var _this = this;

    _this.stackedSnippets = {
      tabs: {
        html: {
          codeUrl: 'modules/checkboxes/examples/stacked.html'
        },
        js: {
          codeUrl: 'modules/checkboxes/examples/js.html'
        },
        css: {
          codeUrl: 'modules/checkboxes/examples/css.html'
        },
        scss: {
          codeUrl: 'modules/checkboxes/examples/scss.html'
        }
      }
    };

    _this.stackedOSSnippets = {
      tabs: {
        html: {
          codeUrl: 'modules/checkboxes/examples/stacked.html'
        }
      }
    };
  });
})();
