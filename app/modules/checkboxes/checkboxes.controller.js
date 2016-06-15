(function () {
  'use strict';

  angular.module('pb.ds.checkboxes').controller('CheckboxesController', function ($log) {
    var _this = this;
    var editorOptions = {
      mode: 'htmlmixed'
    };

    _this.stackedSnippets = {
      tabs: {
        html: {
          editor: editorOptions,
          codeUrl: 'modules/checkboxes/examples/stacked.html'
        },
        js: {
          editor: {mode: 'javascript'},
          codeUrl: 'modules/checkboxes/examples/stacked1.html'
        }
      }
    };

    _this.stackedOSSnippets = {
      tabs: {
        html: {
          editor: editorOptions,
          codeUrl: 'modules/checkboxes/examples/stacked.html'
        }
      }
    };

  });
})();
