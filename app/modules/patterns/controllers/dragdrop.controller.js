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
    
    _this.tooltip = {
      isEnabled: true
    };
    
    $scope.$on('first-bag.drag', function(e, el, container) {
      _this.tooltip.isEnabled = !_this.tooltip.isEnabled;
    });
    
    $scope.$on('first-bag.drop', function(e, el, container) {
      _this.tooltip.isEnabled = !_this.tooltip.isEnabled;
    });

  });

})();
