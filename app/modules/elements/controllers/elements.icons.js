'use strict';

angular.module('pb.elements')
.controller('IconsCtrl', ['$log', 'faIcons', function($log, faIcons) {

  var ctrl = this;

  ctrl.faIcons = faIcons.data.icons;

}]);
