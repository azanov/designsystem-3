(function () {
  'use strict';

  angular.module('pb.ds.resources').controller('ResourcesGalleryController', function ($log, $uibModal, $window, GalleryResolve) {
    var _this = this;
    _this.data = GalleryResolve;

    _this.filters = null;
    _this.rankers = null;

    // Update the filters array based on the given filter $param filter: the name of a tab like 'work'
    _this.filter = function (filter) {
      if (filter) {
        _this.filters = [[['tabs', 'contains', filter]]];
      } else {
        _this.filters = null;
      }
      
    };

    // Update the rankers array based on the given ranker $param ranker: the name of a card's property or a custom function 
    _this.orderBy = function (ranker) {
      if (ranker) {
        _this.rankers = [[ranker, 'desc']];
      } else {
        _this.rankers = null;
      }
      
    };

    _this.open = function (item) {
      $uibModal.open({
        templateUrl: 'modules/resources/templates/gallery-modal.html',
        controller: 'GalleryModalController as modal',
        size: 'lg',
        windowTopClass: 'fullscreen-modal',
        resolve: {
          itemResolve: function () {
            return item;
          }
        }
      });
    };
  });
})();
