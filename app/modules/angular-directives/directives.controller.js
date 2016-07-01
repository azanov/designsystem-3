(function () {
  'use strict';

  angular.module('pb.ds.directives').controller('DirectivesController', function ($log) {
    var _this = this;

    _this.bowerScriptExample = {
      tabs: {
        html: {
          codeUrl: 'modules/angular-directives/examples/bower-script.html'
        }
      }
    };

    _this.dependencyExample = {
      tabs: {
        js: {
          codeUrl: 'modules/angular-directives/examples/dependency.js'
        }
      }
    };

    _this.stackedCheckboxesExample = {
      tabs: {
        html: {
          codeUrl: 'modules/angular-directives/examples/stacked-checkboxes.html'
        }
      }
    };

    _this.inlineCheckboxesExample = {
      tabs: {
        html: {
          codeUrl: 'modules/angular-directives/examples/inline-checkboxes.html'
        }
      }
    };

    _this.stackedRadioExample = {
      tabs: {
        html: {
          codeUrl: 'modules/angular-directives/examples/stacked-radio.html'
        }
      }
    };

    _this.inlineRadioExample = {
      tabs: {
        html: {
          codeUrl: 'modules/angular-directives/examples/inline-radio.html'
        }
      }
    };
  });
})();
