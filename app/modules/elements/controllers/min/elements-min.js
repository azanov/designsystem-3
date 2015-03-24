/* global pbDashboard */
/* jshint strict:false */

angular.module('pb.elements').controller('ElementsCtrl', function($log, people, navigation) {

  var _this = this;

  _this.people = people.data.data;
  _this.leftNav = navigation;

});


