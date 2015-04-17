(function() {

  'use strict';

  angular.module('pb.elements').controller('IconsCtrl', function($log, faIconsResolve) {

    var _this = this;

    _this.faIcons = faIconsResolve.data.icons;

    _this.pbIcons =  [
      'addressbook',
      'addtocatalog',
      'addtofolder',
      'catalog',
      'connection',
      'databaseconnection',
      'filesystemconnection',
      'folder',
      'labellayer',
      'layer',
      'line',
      'map',
      'metadata',
      'metadatatemplate',
      'newcatalog',
      'newconnection',
      'newfolder',
      'newlayer',
      'newmap',
      'newtable',
      'newtile',
      'point',
      'polygon',
      'scale',
      'table',
      'tile',
      'treeview'
    ];

  });

})();
