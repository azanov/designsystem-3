(function() {

  'use strict';

  angular.module('pb.ds.foundation').controller('TypographyController', function($log) {

    var _this = this;

    _this.header = [
      { tag: 'H1', font:'Precision Sans Light 32px', use:'Main head', class: '', extraclass: 'h1', color: '\#CF0989', altclass:'.alt', altcolor: '#2E2E2E'},
      { tag: 'H2', font:'Precision Sans Regular 20px', use:'Section Header / Product Title', class: '', extraclass: 'h2', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H3', font:'Precision Sans Regular 18px', use:'Sub Section Header', class: '', extraclass: 'h3', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H4', font:'Helvetica Neue Bold 16px', use:'Sub Sub Section Header', class: '', extraclass: 'h4', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H5', font:'Helvetica Neue Bold 14px', use:'Small Header', class: '', extraclass: 'h5', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'},
      { tag: 'H6', font:'Helvetica Neue Bold 12px', use:'Extra Small Header', class: '', extraclass: 'h6', color: '#2E2E2E', altclass:'.alt', altcolor: '#4E4E4E'}

    ];

    _this.bodyCopy = [
      { desc: 'Body text', font: 'Helvetica Neue Regular 14px', class: '', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Caption', font: 'Helvetica Neue Regular 12px', class: 'caption', variable: '$pb-gray-500', color: '#4E4E4E'},
      { desc: 'Body text large', font: 'Helvetica Neue Regular 16px', class: 'text-large', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Body text small', font: 'Helvetica Neue Regular 12px', class: 'text-small', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Body text xsmall, copyrights, footnotes', font: 'Helvetica Neue Regular 10px', class: 'text-xs', variable: '$pb-gray-400, $text-color', color: '#717171'},
      { desc: 'Hyperlink', font: 'underlying font', class: '', variable: '$link-color, $pb-medium-blue', color: '#0072b8'}
    ];

    _this.navigationItems = [
      { desc: 'Basic Nav items', color: '#FFFFFF', font: 'Precision Sans Regular 14px'},
      { desc: 'Section Headers (in dropdown)', color: '#2e2e2e', font: 'Precision Sans Regular 14px'},
      { desc: 'Tiered Dropdown Nav items', color: '#717171', font: 'Helvetica Neue Regular 12px'},
      { desc: 'Tiered Dropdown Nav item (active)', color: '#2e2e2e', font: 'Helvetica Neue Regular 12px'},
      { desc: 'Tiered Dropdown Section Header (within dropdown)', color: '#2E2E2E', font: 'Precision Sans Regular 14px'},
      { desc: 'Side Nav Section Header', color: '#2e2e2e', font: 'Precision Sans Regular 18px'},
      { desc: 'Side Nav item', color: '#717171', font: 'Helvetica Neue Regular 14px'},
      { desc: 'Side Nav hover item', color: '#2e2e2e', font: 'Helvetica Neue Regular 14px'},
      { desc: 'Side Nav active item', color: '#2e2e2e', font: 'Helvetica Neue Regular 14px'},
      { desc: 'Tab Text', color: '#717171', font: 'Precision Sans Regular 14px'},
      { desc: 'Tab Text (active)', color: '#2E2E2E', font: 'Precision Sans Regular 14px'},
      { desc: 'Breadcrumbs', color: '#717171', font: 'Precision Sans Regular 14px'},
      { desc: 'Breadcrumbs (hover)', color: '#2E2E2E', font: 'Precision Sans Regular 14px'},
      { desc: 'Breadcrumbs (previous pages - Link)', color: '#0072B8', font: 'Helvetica Neue Regular 14px'},
      { desc: 'Breadcrumbs (current page)', color: '#C0C0C0', font: 'Helvetica Neue Regular 14px'}
    ];


    _this.formsInputs = [
      { desc: 'Field Labels', font: 'Helvetica Neue Regular 14px', color: '#717171'},
      { desc: 'Input field text entered', font: 'Helvetica Neue Regular 14px', color: '#3e53a4'},
      { desc: 'Input field text placeholder', font: 'Helvetica Neue Regular 14px', color: '#9b9b9b'},
      { desc: 'Input field text disabled (if applicable)', font: 'Helvetica Neue Regular 14px', color: '#c0c0c0'},
      { desc: 'Input field text readonly', font: 'Helvetica Neue Regular 14px', color: '#4e4e4e'},
      { desc: 'Radio button labels', font: 'Helvetica Neue Regular 14px', color: '#717171'},
      { desc: 'Check Box labels', font: 'Helvetica Neue Regular 14px', color: '#717171'}
    ];

    _this.buttons = [
      { desc:'Primary Button Text', color:'#FFFFFF'},
      { desc:'Secondary Button Text', color:'#3E53A4'},
      { desc:'Tertiary Button Text', color:'#3E53A4'},
      { desc:'Toggle Text', color:'#717171'},
      { desc:'Toggle Text (active)', color:'#FFFFFF'}
    ];

    _this.dataTables = [
      { desc:'Column Headers', color:'#2E2E2E'}
    ];

    _this.fonts = [
      {
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
