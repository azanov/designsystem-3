(function () {
  'use strict';
  angular.module('pb.ds.foundation').controller('DirectiveController', function ($translate, toastr) {
    var _this = this;

    _this.models = {};
    _this.models.checkbox1 = false;
    _this.models.checkbox1disabled = false;
    _this.models.radio1disabled = false;

    _this.list = [];
    _this.models.one = undefined;

    _this.onCheckbox = function (val) {
      toastr.info('Checkbox ', val);
    };

    _this.onRadio = function (val) {
      toastr.info('Radio Button', val);
    };

    _this.changeLanguage = function (lang) {
      $translate.use(lang);
    };

    // _this.onChangeStepper = function (val) {
    //  console.log('hello', val);
    // };
    // _this.props = [
    //  {
    //    label : 'Recipient',
    //    country : 'United States'
    //  },
    //  {
    //    label : 'Package Type'
    //  },
    //  {
    //    label : 'Services'
    //  },
    //  {
    //    label : 'Send Package'
    //  },
    //  {
    //    label : 'Package In Transit'
    //  },
    //  {
    //    label : 'Package Received'
    //  }
    // ];

    // _this.currentIndex = 0;
    //
    // _this.currentProp = _this.props[_this.currentIndex];
    //
    // _this.increaseStep = function() {
    //  if(_this.currentIndex<_this.props.length){
    //    _this.currentIndex = _this.currentIndex+1;
    //    _this.currentProp = _this.props[_this.currentIndex];
    //  }
    // }
    // _this.decreaseStep = function(){
    //  if(_this.currentIndex>0){
    //    _this.currentIndex = _this.currentIndex-1;
    //    _this.currentProp = _this.props[_this.currentIndex];
    //  }
    // }
  });
})();
