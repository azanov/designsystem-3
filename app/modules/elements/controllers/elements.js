/* global pbDashboard */
/* jshint strict:false */

angular.module('pb.elements')

.controller('ElementsCtrl', ['$log', 'people', 'navigation', function($log, people, navigation){

      var ctrl = this;

      ctrl.people = people.data.data;
      ctrl.leftNav = navigation;

    }
  ]);
