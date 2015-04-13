(function() {

  'use strict';

  angular.module('pb.elements').controller('IconsCtrl', function($log, faIconsResolve) {

    var _this = this;

    _this.faIcons = faIconsResolve.data.icons;

    _this.pbIcons =  [
      'address-book',
      'addtocatalog',
      'addtofolder',
      'catalog',
      'connection',
      'databaseconnection',
      'filesystemconnection',
      'folder',
      'layer',
      'line',
      'map',
      'metadata',
      'metadatatemplate',
      'newcatalog',
      'newconnection',
      'newfolder',
      'newtable',
      'point',
      'polygon',
      'scales',
      'table',
      'tile'
    ];

  });

})();
