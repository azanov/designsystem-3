(function () {
  'use strict';
  angular.module('pb.ds.foundation').controller('DirectiveController', function ($translate) {
    var _this = this;

    _this.models = {};
    _this.models.checkbox1 = false;

    _this.models.checkbox1disabled = true;
    _this.models.radio1disabled = false;

    _this.list = [];
    _this.models.one = undefined;
    _this.submit = function () {
      console.log(_this.models.one);
      if (_this.models.one) {
      _this.list.push(_this.models.one);
      _this.list.push(_this.models.one11);
      _this.models.one = '';
      }
    };

    _this.onCheckbox = function (val) {
      toastr.info('Checkbox ', val);
    };

    _this.onRadio = function (val) {
      toastr.info('Radio Button', val);
    };

    _this.changeLanguage = function (lang) {
      $translate.use(lang);
    };

    _this.onChangeStepper = function (val) {
      console.log('hello', val);
    };
    });
})();
