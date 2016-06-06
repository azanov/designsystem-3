(function () {
  'use strict';

  angular.module('pb.ds.modals').controller('ModalsController', function ($scope, $uibModal) {
    var _this = this;

    _this.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'myPopoverTemplate.html',
      title: 'Title'
    };

    _this.modals = {
      basicMessage: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/basic-message.html',
          controller: 'BootstrapUiBasicMessageModalController'
        });
      },
      singleChoice: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/single-choice.html',
          controller: 'BootstrapUiSingleChoiceModalController'
        });
      },
      radioButtons: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/radio-buttons.html',
          controller: 'BootstrapUiRadioButtonsModalController'
        });
      },
      commentForm: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/comment-form.html',
          controller: 'BootstrapUiCommentFormModalController'
        });
      },
      withCopy: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/with-copy.html',
          controller: 'BootstrapUiWithCopyModalController'
        });
      },
      simple: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function () {
        $uibModal.open({
          templateUrl: 'modules/modals-popovers/modals/prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function (fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function () {
        $uibModal.open({
          windowTemplateUrl: 'modules/modals-popovers/modals/draggable-template.html',
          templateUrl: 'modules/modals-popovers/modals/draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };
  });
})();
