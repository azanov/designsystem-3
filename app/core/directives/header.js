/* global app */
/* jshint strict:false */

app.directive('header', function() {
  return {
    restrict: 'EA',
    templateUrl: 'core/templates/header.html',
    controller: 'HeaderCtrl as hc'
  };
});
