(function() {

  'use strict';

  angular.module('pb.ds.helpers').controller('HelpersController', function($log) {

    var _this = this;

    _this.spacers = {
      top: {
        values: ['no top spacer', 'spacer-top-xs (10px)', 'spacer-top-sm (20px)', 'spacer-top-md (30px)', 'spacer-top-lg (40px)', 'spacer-top-xl (50px)'],
        selected: 'spacer-top-sm (20px)'
      },
      bottom: {
        values: ['no bottom spacer', 'spacer-bottom-xs (10px)','spacer-bottom-sm (20px)', 'spacer-bottom-md (30px)', 'spacer-bottom-lg (40px)', 'spacer-bottom-xl (50px)'],
        selected: 'spacer-bottom-sm (20px)'
      }
    };


    _this.backgrounds = [
      'bg-header-color',
      'bg-header-color-alt',
      'bg-white',
      'bg-pb-medium-blue-300',
      'bg-pb-medium-blue',
      'bg-pb-medium-blue-700',
      'bg-pb-blue-300',
      'bg-pb-blue',
      'bg-pb-blue-700',
      'bg-pb-purple-300',
      'bg-pb-purple',
      'bg-pb-purple-700',
      'bg-pb-cyan-300',
      'bg-pb-cyan',
      'bg-pb-cyan-700',
      'bg-pb-magenta-300',
      'bg-pb-magenta',
      'bg-pb-magenta-700',
      'bg-pb-dark-orange-300',
      'bg-pb-dark-orange',
      'bg-pb-dark-orange-700',
      'bg-pb-orange-300',
      'bg-pb-orange',
      'bg-pb-orange-700',
      'bg-pb-yellow-300',
      'bg-pb-yellow',
      'bg-pb-green-300',
      'bg-pb-green',
      'bg-pb-green-700',
      'bg-pb-dark-green-300',
      'bg-pb-dark-green',
      'bg-pb-dark-green-700',
      'bg-pb-gray-700',
      'bg-pb-gray-500',
      'bg-pb-gray-400',
      'bg-pb-gray-300',
      'bg-pb-gray',
      'bg-pb-light-gray',
      'bg-pb-bg1',
      'bg-pb-bg2',
      'bg-pb-bg3',
      'bg-pb-bg4',
      'bg-pb-bg5'
    ];

    _this.foregrounds = [
      'pb-medium-blue-300',
      'pb-medium-blue',
      'pb-medium-blue-700',
      'pb-blue-300',
      'pb-blue',
      'pb-blue-700',
      'pb-purple-300',
      'pb-purple',
      'pb-purple-700',
      'pb-cyan-300',
      'pb-cyan',
      'pb-cyan-700',
      'pb-magenta-300',
      'pb-magenta',
      'pb-magenta-700',
      'pb-dark-orange-300',
      'pb-dark-orange',
      'pb-dark-orange-700',
      'pb-orange-300',
      'pb-orange',
      'pb-orange-700',
      'pb-yellow-300',
      'pb-yellow',
      'pb-green-300',
      'pb-green',
      'pb-green-700',
      'pb-dark-green-300',
      'pb-dark-green',
      'pb-dark-green-700',
      'pb-gray-700',
      'pb-gray-500',
      'pb-gray-400',
      'pb-gray-300',
      'pb-gray',
      'pb-light-gray',
      'pb-bg1',
      'pb-bg2',
      'pb-bg3',
      'pb-bg4',
      'pb-bg5'
    ];

  });

})();
