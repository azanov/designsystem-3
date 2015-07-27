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
        //$log.debug(item);

        var results = true;

        //country
        angular.forEach(_this.table.search.country, function(value, key, obj) {

          if (value && item.country !== key) {
            //$log.debug(item.country, value, key);
            results = false;
          }

        });

        return results;

      }
    };


  });


  angular.module('pb.ds.tables').filter('count', function($log) {
    return function(input, key, obj) {

      //$log.debug(input, key, obj);

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

      $log.debug(search);

      if (search === {}) {
        console.log('empty');
      }

      var output = [];

      angular.forEach(input, function(item) {

        if (search === {}) {
          console.log('empty');
        }

      });

      //$log.debug(input, search);
      // var search = {
      //   country: {
      //     'Australia': true,
      //     'France': true
      //   },
      //   groups: {
      //     'Admin': true
      //   }
      // }


      // angular.forEach(search, function (value, key, obj) {
      //   $log.debug(value, key, obj);
      //
      //   if (value) {
      //
      //     angular.forEach(value, function(value, key, obj) {
      //       $log.debug("SUB", value, key, obj);
      //
      //     });
      //
      //   }
      //
      // });

    };
  });

})();
