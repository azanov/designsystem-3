(function() {

  'use strict';

  angular.module('pb.ds.tables').controller('TablesFacetedSearchController',
  function($log, PeopleResolve, moment) {

    var _this = this;


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
        var result = false;

        var countries = [];

        angular.forEach(_this.table.search.country, function(value, key, obj) {
          if (value) {
            countries.push(key);
          }
        });

        //country
        if (countries.length > 0) {
          angular.forEach(countries, function(value, index, obj) {
            if (item.country === value) {
              result = true;
            }
          });
        }
        else {
          result = true;
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
