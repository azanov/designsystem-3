(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesFacetedSearchController',
  function($log, PeopleResolve, moment) {

    var _this = this;

    _this.groups = ['Hartford', 'Noida', 'Pune', 'San Diego', 'Stamford', 'Austin', 'Dallas', 'Chatham'];

    _this.facetList = [];
    _this.checked = function(value, item) {
      $log.debug(value, item);
      if (value) {
        _this.facetList.push(item);
      }
      else {
        var index = _this.facetList.indexOf(item);
        _this.facetList.splice(index, 1);
      }
    };

    _this.table = {
      data: PeopleResolve,
      sort: {
        type: 'first_name',
        reverse: false,
        change: function(key) {
          _this.table.sort.type = key;
          _this.table.sort.reverse = !_this.table.sort.reverse;
        }
      },
      paging: {
        size: 10,
        sizes: [10, 25, 50, 100]
      },
      groups: {
        min: 5,
        max: 'Infinity'
      },
      selectEmail: function(item, event) {
        event.preventDefault();
        event.stopPropagation();
      },
      showMore: function(item, bool, event) {
        event.preventDefault();
        event.stopPropagation();

        if (bool) {
          item.limit = _this.table.groups.max;
          return;
        }
        else {
          item.limit = undefined;
        }
      },
      search: {

      },
      searchClear: function() {
        _this.table.search.$ = '';
      },
      filter: function(item) {
        var result = true;

        //store the selected countries
        var countries = [];

        angular.forEach(_this.table.search.country, function(value, key, obj) {
          if (value) {
            countries.push(key);
          }
        });

        //loop through each selected country
        if (countries.length > 0) {
          angular.forEach(countries, function(value, index, obj) {
            if (item.country !== value) {
              result = false;
            }
          });
        }


        //store the selected groups
        var groups = [];

        angular.forEach(_this.table.search.group, function(value, key, obj) {
          if (value) {
            groups.push(key);
          }
        });

        //loop through each selected
        if (groups.length > 0) {
          angular.forEach(groups, function(value, index, obj) {
            if (item.groups.indexOf(value) === -1) {
              result = false;
            }
          });
        }


        //store the selected userTypes
        var userTypes = [];

        angular.forEach(_this.table.search.userType, function(value, key, obj) {
          if (value) {
            userTypes.push(key);
          }
        });

        //loop through each selected
        if (userTypes.length > 0) {
          angular.forEach(userTypes, function(value, index, obj) {
            if (item.userType.indexOf(value) === -1) {
              result = false;
            }
          });
        }

        return result;

      }
    };


  });


  angular.module('pb.ds.tables').filter('count', function($log) {
    return function(input, key, obj) {

      var count = 0;

      angular.forEach(obj, function(o) {
        if (o[key] === input) {
          count++;
        }
      });

      return count;
    };
  });

  angular.module('pb.ds.tables').filter('faceted', function($log) {
    return function(input, search) {
      //$log.debug(input, search);

      var output = [];

      angular.forEach(input, function(value, key, obj) {
        if (this.country && this.country[value.country] === true) {
          output.push(value);
        }
      }, search);

      return output;

    };
  });

})();
