(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('FontController', function($log) {

    var _this = this;


    _this.fonts = [{
        fontName: 'Precision Sans Light',
        font: 'PrecisionSans_W_Lt'
      }, {
        fontName: 'Precision Sans Light Italic',
        font: 'PrecisionSans_W_LtIt'
      }, {
        fontName: 'Precision Sans Regular',
        font: 'PrecisionSans_W_Rg'
      }, {
        fontName: 'Precision Sans Regular Italic',
        font: 'PrecisionSans_W_RgIt'
      }, {
        fontName: 'Precision Sans Medium',
        font: 'PrecisionSans_W_Md'
      }, {
        fontName: 'Precision Sans Medium Italic',
        font: 'PrecisionSans_W_MdIt'
      }, {
        fontName: 'Precision Sans Bold',
        font: 'PrecisionSans_W_Bd'
      }, {
        fontName: 'Precision Sans Bold Italic',
        font: 'PrecisionSans_W_BdIt'
      }

    ];


  });

})();
