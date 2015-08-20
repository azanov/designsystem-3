(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('BootstrapUiPopoverController', function($scope, $modal) {

    var _this = this;

    _this.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'myPopoverTemplate.html',
      title: 'Title'
    };

    _this.modals = {
      basicMessage: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-basic-message.html',
          controller: 'BootstrapUiBasicMessageModalController'
        });
      },
      singleChoice: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-single-choice.html',
          controller: 'BootstrapUiSingleChoiceModalController'
        });
      },
      radioButtons: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-radio-buttons.html',
          controller: 'BootstrapUiRadioButtonsModalController'
        });
      },
      commentForm: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-comment-form.html',
          controller: 'BootstrapUiCommentFormModalController'
        });
      },
      withCopy: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-with-copy.html',
          controller: 'BootstrapUiWithCopyModalController'
        });
      },
      simple: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function() {
        $modal.open({
          templateUrl: 'modules/elements/templates/modals/elements-prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function(fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function() {
        $modal.open({
          windowTemplateUrl: 'modules/elements/templates/modals/elements-draggable-template.html',
          templateUrl: 'modules/elements/templates/modals/elements-draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };



  });

})();
