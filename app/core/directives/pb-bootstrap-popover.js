/* global app */
/* global $ */
/* jshint strict:false */

app.directive('pbBootstrapPopover', function() {
  return {
    restrict: 'AE',
    link: function postLink(scope, element) {

      $(element).popover();

    }
  };
});
