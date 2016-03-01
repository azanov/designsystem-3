(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('DragDropController', function($log, $scope) {

    var _this = this;
    
    _this.items = {
      unselected: [
        {
          id: 0,
          label: 'Lorem'
        },
        {
          id: 1,
          label: 'Ipsum'
        },
        {
          id: 2,
          label: 'Dolor'
        }
      ],
      selected: [
        {
          id: 3,
          label: 'Sit'
        }
      ]
    };

  });

})();
