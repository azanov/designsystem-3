(function() {

  'use strict';

  angular.module('pb.ds.buildanimations').controller('BuildAnimationsController', function($log, $http) {

    var _this = this;

		_this.candies = [
			'bubble gum',
			'fireball',
			'laughy taffy',
			'reese\'s cups',
			'skittles',
      'M&Ms',
      'Hershey\'s bar'
		];

    _this.movies = [
      'Inside Out',
      'Indiana Jones',
      'Mad Max: Fury Road',
      'The Martian',
      'Straight Outta Compton',
      'Me and Earl and the Dying Girl',
      'Kingsman: The Secret Service',
      'Avengers: Age of Ultron'
    ];


    /* Should consolidate this down into one function */
    _this.pickEntrance = function(selected) {
      if(_this.selectedEntrance !== selected) {
        _this.selectedEntrance = selected;
      } else if (_this.selectedEntrance === selected) {
        _this.selectedEntrance = undefined;
      }
    };

    _this.pickExit = function(selected) {
      if(_this.selectedExit !== selected) {
        _this.selectedExit = selected;
      } else if (_this.selectedExit === selected) {
        _this.selectedExit = undefined;
      }
    };
    /* --------------------------- */

    _this.pickAccent = function(selected) {
      if(_this.selectedAccent !== selected) {
        _this.selectedAccent = selected;
      } else if (_this.selectedAccent === selected) {
        _this.selectedAccent = undefined;
      }
    };

    _this.animationNames = function() {
      $http.get('modules/buildanimations/data/animations.json').then(function(response) {
        _this.animationClasses = response.data;
      });
    };
    _this.animationNames();


  });

})();
