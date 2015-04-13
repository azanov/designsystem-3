(function() {

  'use strict';

  angular.module('pb.components').controller('PanelsCtrl', function($log, people, millerColumn) {

    var _this = this;

    _this.people = people.data.data;

    _this.millercolumn = {
        data: millerColumn.data.versionInfos,
        level1: null,
        level2: null
      };

    _this.getSublevel1 = function(index) {
      _this.millercolumn.level1 = _this.millercolumn.data[index].versionInfos;
      _this.millercolumn.dataSelected = index;
      _this.millercolumn.level2 = null;
      _this.millercolumn.level1Selected = null;
      $log.log(_this.millercolumn.level1);
    };

    _this.getSublevel2 = function(index) {
      _this.millercolumn.level2 = _this.millercolumn.level1[index].versionInfos;
      _this.millercolumn.level1Selected = index;
    };

    //draggable options
    _this.draggable = {
      connectWith: '.column',
      handle: '.panel-heading',
      cursor: 'move',
      placeholder: 'placeholder',
      forcePlaceholderSize: true,
      opacity: 0.4
    };

  });

})();
