(function () {
  'use strict';
  
  angular.module('pb.ds.home').controller('GalleryModalController', function ($log, $uibModalInstance, itemResolve) {
    var _this = this;
    _this.item = itemResolve;
    _this.currentDescription = _this.item.gallery[0].description;
    
    _this.close = function () {
      $uibModalInstance.close();
    };

    _this.slickOptions = {
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        event: {
          afterChange: function (event, slick, currentSlide, nextSlide) {
            _this.currentDescription = _this.item.gallery[currentSlide].description;
          }
        }
      }
    };
  });
})();
