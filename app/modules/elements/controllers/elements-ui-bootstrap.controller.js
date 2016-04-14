(function () {
  'use strict';

  angular.module('pb.ds.elements').controller('UiBootstrapController', function ($log, $uibModal, $scope, $timeout, $window) {
    var _this = this;

    // Accordions
    _this.oneAtATime = true;
    _this.compactOneAtATime = true;
    _this.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    _this.compactStatus = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
    _this.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    // modals
    _this.modals = {
      simple: function () {
        $uibModal.open({
          templateUrl: 'modules/components/modals/elements-simple.html',
          controller: 'BootstrapUiSimpleModalController'
        });
      },
      modal: function () {
        $uibModal.open({
          templateUrl: 'modules/elements/modals/elements-modal.html',
          controller: 'BootstrapUiModalController',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function () {
        $uibModal.open({
          templateUrl: 'modules/elements/modals/elements-prompt.html',
          controller: 'BootstrapUiPromptModalController',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function (fullname) {
          _this.fullname = fullname;
        });
      },
      draggable: function () {
        $uibModal.open({
          windowTemplateUrl: 'modules/elements/modals/elements-draggable-template.html',
          templateUrl: 'modules/elements/modals/elements-draggable.html',
          controller: 'BootstrapUiDraggableModalController',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };

    _this.calendar = {
      format: 'MMMM dd, yyyy',
      options: {
        formatYear: 'yyyy',
        startingDay: 1,
        showWeeks: false,
        showButtonBar: false
      },
      open: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _this.calendar.opened = true;
      }
    };

    _this.time = {
      menuClick: function (event) {
        event.preventDefault();
      }
    };
  });
})();
