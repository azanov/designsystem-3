(function() {

  'use strict';

  angular.module('pb.ds.patterns').controller('DragDropController', function($log, $scope) {


    
    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };
    
    $scope.onDragstart = function(list, event) {
       list.dragging = true;
      //  if (event.dataTransfer.setDragImage) {
      //    var img = new Image();
      //    img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
      //    event.dataTransfer.setDragImage(img, 0, 0);
      //  }
    };
    
    $scope.getSelectedItemsIncluding = function(list, item) {
      $scope.models.selected.label = item.label;
      
      //item.selected = true;
      //return list.items.filter(function(item) { return item.selected; });
    };
    
    $scope.logEvent = function(message, event, item) {
        console.log(message, '(triggered by the following', event.type, 'event)');
        console.log(event);
        console.log(event.dragProxy);
         $scope.models.selected = item;
        angular.element(event.dragProxy).addClass('TEST');
    };
    
    $scope.dragEnd = function(event) {
      angular.element(event.target).removeClass('TEST');
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

  });

})();
