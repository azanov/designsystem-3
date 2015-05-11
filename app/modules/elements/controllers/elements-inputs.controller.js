(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('InputsController', function($log, CountriesResolve) {

    var _this = this;

    //numeric stepper
    _this.numericStepper = {
      limit: [0],
      wheelStep: 1,
      arrowStep: 1
    };

    //datetimepicker1
    _this.datetimepicker1 = {
      pickTime: false
    };

    //datetimepicker2
    _this.datetimepicker2 = {
      pickDate: false
    };

    // add phone number
    _this.choices1 = [{ id: 'choice1'}];
    _this.choices2 = [{ id: 'choice1', num: '222-555-3456' }];
    _this.choices3 = [{ id: 'choice1'}];
    _this.choices4 = [{ id: 'choice1', num: '222-555-3456' }];

    _this.maxChoices = 3;

    _this.addNewChoice = function(arr) {
      var newItemNo = arr.length + 1;
      arr.push({
       'id': 'choice' + newItemNo
      });
    };

    _this.showAddChoice = function(choice, arr) {
      return arr.length !== _this.maxChoices;
    };





    //selectize
    _this.peopleSelect = {
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
    _this.countrySelect = {
      options: {
        valueField: 'code',
        labelField: 'name',
        searchField: ['name']
      },
      selected: {},
      countries: CountriesResolve
    };

    _this.multiCountrySelect = {
      options: {
        valueField: 'code',
        labelField: 'name',
        searchField: ['name'],
        plugins: ['remove_button']
      },
      selected: {},
      countries: CountriesResolve
    };


    // SWITCHES
    _this.switchStatus1 = false;
    _this.switchStatus2 = false;
    _this.switchStatus3 = true;
    _this.switchStatus4 = false;

  });

})();
