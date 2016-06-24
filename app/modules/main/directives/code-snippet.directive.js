// TODO: add comment about xmp tag
(function () {
  'use strict';

  angular.module('app').directive('pbCodeSnippet', function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/templates/code-snippet.html',
      // use options.tabs[mode].editor property as options for codeMirror tool
      scope: {
        options: '='
      },
      link: function postLink (scope, element, attrs) {
        var modeMap = {
          js: 'javascript',
          html: 'htmlmixed',
          css: 'text/css',
          scss: 'text/x-scss'
        };

        scope.initCodeMirror = function (index, mode, opt) {
          var includeElement = element.find('.include-wrapper').eq(index).find('ng-include');
          var options = opt || {};
          var text = includeElement.text();
          var codemirrorOptions = angular.extend(
            {
              value: text,
              lineWrapping: true,
              lineNumbers: true,
              readOnly: 'nocursor',
              mode: modeMap[mode] || 'htmlmixed'
            },
            options
          );
          // TODO: think about using factory for geting new codeMirror instance
          // also add to factory methods for higlighting different files
          var codemirror = new window.CodeMirror(function (cm_el) {
            includeElement.html('');
            includeElement.append(cm_el);
          }, codemirrorOptions);
        };
      }
    };
  });
})();
