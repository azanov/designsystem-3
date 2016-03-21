(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('DragDropController', function($log, $scope) {

    var _this = this;

    _this.items = {
      unselected: [{
        id: 0,
        label: 'Nulla consequat malesuada quam. Proin quis sem sit amet sem malesuada tincidunt.'
      }, {
        id: 1,
        label: 'Vestibulum luctus malesuada nisl, sit amet pharetra lorem malesuada faucibus. Donec ut diam imperdiet, pharetra lacus at, auctor sapien. Proin in imperdiet nulla.'
      }, {
        id: 2,
        label: 'Donec mauris ante, scelerisque sed nunc eu, facilisis rutrum nulla.'
      }],
      selected: [{
        id: 3,
        label: 'Integer condimentum eget lectus eu aliquam. Morbi at neque velit. Nullam faucibus elit sit amet facilisis faucibus. Maecenas nisl arcu, luctus non orci sed.'
      }]
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

    $scope.$on('first-bag.over', function(e, el, container) {
      container.addClass('ex-over');
    });

    $scope.$on('first-bag.out', function(e, el, container) {
      container.removeClass('ex-over');
    });

  });

})();
