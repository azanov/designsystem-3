'use strict';

angular.module('pb.elements')
.controller('InputsCtrl', ['$log', 'countriesList', function($log, countriesList) {

  var ctrl = this;

  //numeric stepper
  ctrl.numericStepper = {
    'limit': [0, ], // no negative numbers
    'wheelStep': 1,
    'arrowStep': 1
  };


  //datetimepicker1
  ctrl.datetimepicker1 = {
    pickTime: false
  };


  //datetimepicker2
  ctrl.datetimepicker2 = {
    pickDate: false
  };



  //selectize
  ctrl.peopleSelect = {
    options: {
      valueField: 'email',
      labelField: 'name',
      searchField: ['name'],
      render: {
        option: function(item, escape) {
          var html = '';
          html += '<div>';
          html += '<div style="font-size: 16px;">' + item.name + '</div>';
          html += '<div style="">' + item.email + '</div>';
          html += '</div>';

          return html;
        }
      }
    },
    selected: {},
    people: [{
      name: 'Adam',
      email: 'adam@email.com'
    }, {
      name: 'Amalie',
      email: 'amalie@email.com'
    }, {
      name: 'Estefanía',
      email: 'estefania@email.com'
    }, {
      name: 'Adrian',
      email: 'adrian@email.com'
    }, {
      name: 'Wladimir',
      email: 'wladimir@email.com'
    }, {
      name: 'Samantha',
      email: 'samantha@email.com'
    }, {
      name: 'Nicole',
      email: 'nicole@email.com'
    }, {
      name: 'Natasha',
      email: 'natasha@email.com'
    }, {
      name: 'Michael',
      email: 'michael@email.com'
    }, {
      name: 'Nicolás',
      email: 'nicole@email.com'
    }]
  };


  //selectize country selects (all on page)
  ctrl.countrySelect = {
    options: {
      valueField: 'code',
      labelField: 'name',
      searchField: ['name']
    },
    selected: {},
    countries: countriesList.data.countries
  };

  ctrl.switchStatus1 = false;
  ctrl.switchStatus2 = false;
  ctrl.switchStatus3 = true;
  ctrl.switchStatus4 = false;


}]);
