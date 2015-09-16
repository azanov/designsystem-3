(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('InputsController', function($log, CountriesResolve, PeopleResolve, moment) {

    var _this = this;

    //numeric stepper
    _this.numericStepper = {
      limit: [0],
      wheelStep: 1,
      arrowStep: 1
    };


    _this.samplePeople = PeopleResolve;



    // controls the "add another row" functionality
    _this.choices1 = [{ id: 'choice1'}];
    _this.choices2 = [{ id: 'choice1', num: '222-555-3456' }];
    _this.choices3 = [{ id: 'choice1'}];
    _this.choices4 = [{ id: 'choice1', num: '222-555-3456' }];

    _this.maxChoices = 3;

    _this.addNewChoice = function(arr) {
      var newItemNo = arr.length + 1;
      arr.push({
        id: 'choice' + newItemNo
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



    _this.customRange = {
      dropdown: {
        items: [
          {
            label: 'Today',
            start: moment().startOf('day'),
            end: moment().endOf('day'),
            selected: false,
            isRange: false,
            isCustom: false
          },
          {
            label: 'Yesterday',
            start: moment().startOf('day').subtract(1, 'days'),
            end: moment().endOf('day').subtract(1, 'days'),
            selected: true,
            isRange: false,
            isCustom: false
          },
          {
            label: 'Custom',
            selected: false,
            isRange: true,
            isCustom: true
          }
        ],
        selected: null,
        init: function() {
          angular.forEach(_this.customRange.dropdown.items, function(value, index) {
            if (value.selected === true) {
              _this.customRange.dropdown.selected = value;
              return;
            }
          });
        },
        click: function(item) {

          angular.forEach(_this.customRange.dropdown.items, function(value, index) {
            value.selected = false;
          });

          item.selected = true;

          _this.customRange.dropdown.selected = item;
        }
      },
      start: {
        //startDate: moment().startOf('day').format('MM/DD/YY'),
        startDate: moment().startOf('day'),
        endDate: moment().endOf('day'),
        options: {
          singleDatePicker: true,
          drops: 'up',
          format: 'MM/DD/YYYY'
        }
      },
      end: {
        //startDate: moment().startOf('day').format('MM/DD/YY'),
        startDate: moment().startOf('day'),
        endDate: moment().endOf('day'),
        options: {
          singleDatePicker: true,
          drops: 'up',
          format: 'MM/DD/YYYY'
        }
      }

    };



  });

})();
