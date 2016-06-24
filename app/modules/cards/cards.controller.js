(function () {
  'use strict';

  angular.module('pb.ds.cards').controller('CardsController', function ($log, PeopleResolve) {
    var _this = this;

    _this.people = PeopleResolve;

    // draggable options
    _this.draggable = {
      connectWith: '.column',
      handle: '.panel-heading',
      cursor: 'move',
      placeholder: 'placeholder',
      forcePlaceholderSize: true,
      opacity: 0.4
    };
  });
})();
