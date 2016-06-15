(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('ModalsController', function ($scope, $uibModal) {
    var _this = this;


    _this.modals = {
      basicMessage: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/basic-message.html',
          controller: 'BootstrapUiBasicMessageModalController'
        });
      },
      singleChoice: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/single-choice.html',
          controller: 'BootstrapUiSingleChoiceModalController'
        });
      },
      radioButtons: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/radio-buttons.html',
          controller: 'BootstrapUiRadioButtonsModalController'
        });
      },
      commentForm: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/comment-form.html',
          controller: 'BootstrapUiCommentFormModalController'
        });
      },
      withCopy: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/with-copy.html',
          controller: 'BootstrapUiWithCopyModalController'
        });
      },
      simple: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function () {
        $uibModal.open({
          templateUrl: 'modules/modals/modal-windows/prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function (fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function () {
        $uibModal.open({
          windowTemplateUrl: 'modules/modals/modal-windows/draggable-template.html',
          templateUrl: 'modules/modals/modal-windows/draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };
  });
})();
