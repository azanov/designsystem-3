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

    _this.isDragging = false;

    $scope.$on('first-bag.drag', function(e, el, container) {
      _this.tooltip.isEnabled = !_this.tooltip.isEnabled;
      _this.isDragging = true;
      $log.debug(e, el, container);
      // if(!el.hasClass('dragging')){
      //     el.addClass('dragging');
      // }

    });

    $scope.$on('first-bag.drop', function(e, el, container) {
      _this.tooltip.isEnabled = !_this.tooltip.isEnabled;
      _this.isDragging = false;
      // el.removeClass('dragging');
    });

    // $scope.$on('first-bag.cloned', function(el, clone, original, type) {
    //   $log.debug(arguments);
    //   el.addClass('cloned');
    // });

    $scope.$on('first-bag.over', function(e, el, container) {
      el.addClass('over');
    });

    $scope.$on('first-bag.out', function(e, el, container) {
      el.removeClass('over');
    });

  });

})();
