(function () {
  'use strict';

  angular.module('pb.ds.resources').controller('ResourcesGalleryController', function ($log, $uibModal, GalleryResolve) {
    var _this = this;
    _this.data = GalleryResolve;
    _this.filters = null;
    _this.rankers = null;
    //_this.rankerOrder = true;
    _this.orders = ['asc', 'desc'];
    _this.selectedOrder = 'asc';

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
      // var order = (_this.rankerOrder) ? 'desc' : 'asc';
      // _this.rankerOrder = !_this.rankerOrder;

      // _this.rankers = [[ranker, order]];
      _this.rankers = [[ranker, _this.selectedOrder]];
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
