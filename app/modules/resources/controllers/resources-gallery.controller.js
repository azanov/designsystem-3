(function () {
  'use strict';

  angular.module('pb.ds.resources').controller('ResourcesGalleryController', function ($log, $uibModal, $window, GalleryResolve) {
    var _this = this;
    _this.data = GalleryResolve;

    _this.open = function (item) {
      $uibModal.open({
        templateUrl: 'modules/resources/templates/gallery-modal.html',
        controller: 'ModalController as modal',
        size: 'lg',
        resolve: {
          itemResolve: function () {
            return item;
          }
        }
      });
    };
  });
})();



/*
(function() {

	'use strict';

	angular.module('pb.ds.home').controller('HomeController',
			function($log, MockData, $uibModal, $window) {
				var _this = this;
				_this.data = MockData;
        
        _this.open = function(item) {
          $uibModal.open({
            templateUrl: 'modules/home/templates/modal.html',
            controller: 'ModalController as modal',
            size: 'lg',
            resolve: {
              itemResolve: function() {
                return item;
              }
            }
          }); 
        };
        
        _this.openLink = function(obj, event) {
          event.stopPropagation();
          event.preventDefault();
          
          console.log(obj);
          
          $window.open(obj.url, '_blank');
        }
        
			});

})();
*/