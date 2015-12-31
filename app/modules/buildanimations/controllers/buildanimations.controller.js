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

    _this.animationNames = function(){
      $http.get('modules/buildanimations/data/animations.json').then(function(response) {
        _this.animationClasses = response.data;
      });
    };
    _this.animationNames();


  });

})();
