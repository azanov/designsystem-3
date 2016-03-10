(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('IconographyController', function($log, IconsResolve) {

    var _this = this;

    _this.faIcons = IconsResolve;

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
      'treeview',
      'admin'
    ];

    _this.ncIcons = [
      'ui-1_analytics-88',
      'ui-1_analytics-89',
      'ui-1_attach-86',
      'ui-1_attach-87',
      'ui-1_bell-53',
      'ui-1_bell-54',
      'ui-1_bell-55',
      'ui-1_bold-add',
      'ui-1_bold-delete',
      'ui-1_bold-remove',
      'ui-1_bookmark-add',
      'ui-1_bookmark-remove'
    ];

  });

})();
