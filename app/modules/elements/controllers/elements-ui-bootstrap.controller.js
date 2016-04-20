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
    _this.singleStatus = {
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

    // alerts
    _this.alerts = [
      { type: 'danger', msg: 'We couldn’t complete your request. Please try again in a moment.' },
      { type: 'success', msg: 'A new address was imported.' }
    ];

    _this.addAlert = function () {
      _this.alerts.push({msg: 'Another alert!'});
    };

    _this.closeAlert = function (index) {
      _this.alerts.splice(index, 1);
    };

    // pagination
    _this.totalItems = 64;
    _this.currentPage = 4;

    _this.setPage = function (pageNo) {
      _this.currentPage = pageNo;
    };

    _this.pageChanged = function () {
      $log.log('Page changed to: ' + _this.currentPage);
    };

    _this.maxSize = 5;
    _this.bigTotalItems = 175;
    _this.bigCurrentPage = 1;

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

    // progress bars
    _this.max = 20;
    _this.random = function () {
      var value = Math.floor(Math.random() * 100 + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      _this.showWarning = type === 'danger' || type === 'warning';

      _this.dynamic = value;
      _this.type = type;
    };

    _this.random();

    _this.randomStacked = function () {
      _this.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
        var index = Math.floor(Math.random() * 4);
        _this.stacked.push({
          value: Math.floor(Math.random() * 30 + 1),
          type: types[index]
        });
      }
    };

    _this.randomStacked();
  });
})();
