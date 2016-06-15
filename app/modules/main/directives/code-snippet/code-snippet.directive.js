//TODO: move template for directive to templates folder
(function () {
  'use strict';

  angular.module('app').directive('pbCodeSnippet', function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/main/directives/code-snippet/code-snippet.html',
      scope: {
        options: '='
      },
      link: function postLink (scope, element, attrs) {

        scope.initCodeMirror = function (index, options) {
          var includeElement = element.find('ng-include').eq(index);
          var text = includeElement.text();
          var codemirrorOptions = angular.extend(
            {
              value: text,
              lineWrapping: true,
              lineNumbers: true,
              readOnly: 'nocursor',
              mode: 'htmlmixed'
            },
            options
          );
          var codemirror = new window.CodeMirror(function(cm_el) {
            includeElement.html('');
            includeElement.append(cm_el);
          }, codemirrorOptions);

          var codemirrorLinesElement = includeElement.find('.CodeMirror-lines'),
            paddingTop = parseInt(codemirrorLinesElement.css('padding-top')),
            paddingBottom = parseInt(codemirrorLinesElement.css('padding-bottom'));

          codemirror.setSize(null, codemirrorLinesElement.height() + paddingTop + paddingBottom);
        }

      }

    };
  });
})();