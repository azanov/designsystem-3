'use strict';

angular.module('pb.components')
.controller('PanelsCtrl', ['$log', 'people', 'millerColumn', function($log, people, millerColumn){

  var ctrl = this;

  ctrl.people = people.data.data;

  console.log(millerColumn);

  ctrl.millercolumn = {
      data: millerColumn.data.versionInfos,
      level1: null,
      level2: null
    };

  ctrl.getSublevel1 = function(index){
    ctrl.millercolumn.level1 = ctrl.millercolumn.data[index].versionInfos;
    ctrl.millercolumn.dataSelected = index;
    ctrl.millercolumn.level2 = null;
    ctrl.millercolumn.level1Selected = null;
    $log.log(ctrl.millercolumn.level1);
  };

  ctrl.getSublevel2 = function(index){
    ctrl.millercolumn.level2 = ctrl.millercolumn.level1[index].versionInfos;
    ctrl.millercolumn.level1Selected = index;
  };



  //draggable options
  ctrl.draggable = {
    connectWith: '.column',
    handle: '.panel-heading',
    cursor: 'move',
    placeholder: 'placeholder',
    forcePlaceholderSize: true,
    opacity: 0.4
  };

}]);





// angular.module('designSystemApp').controller('PanelsCtrl', ['ctrl', '$log', 'PeopleFactory', 'MillerColumnFactory',
// function($scope, $log, PeopleFactory, MillerColumnFactory) {
//
//
//
//

//
//
//
//
// }
// ]);
