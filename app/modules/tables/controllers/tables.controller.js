(function () {
  'use strict';

  angular.module('pb.ds.tables').controller('TablesControllernew', function (PeopleResolve) {
    var _this = this;

    _this.people = PeopleResolve;

    _this.xeditable = {
      data: [
        {
          first_name: 'John',
          last_name: 'Smth',
          carrier: 'USPS'
        },
        {
          first_name: 'Susie',
          last_name: 'Queue'
        }
      ],
      carriers: ['USPS', 'FedEx']
    };

    _this.rowdata = [
      {
        date: 'Date',
        recipient: 'Recipient',
        carrier: 'Carrier',
        shipping: 'Shipping',
        tracking: 'Tracking',
        status: 'Status',
        amount: 'Amount'
      },
      {
        date: 'Date',
        recipient: 'Recipient',
        carrier: 'Carrier',
        shipping: 'Shipping',
        tracking: 'Tracking',
        status: 'Status',
        amount: 'Amount'
      }
    ];

    _this.rowclick = function (item, event) {
      event.preventDefault();
      event.stopPropagation();
      item.selected = !item.selected;
    };

    _this.placementExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/placement.html'
        }
      }
    };

    _this.defaultTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/default.html'
        }
      }
    };


    _this.stripedTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/striped.html'
        }
      }
    };

    _this.hoverTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/hover.html'
        }
      }
    };

    _this.stripedTableHoverExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/stripedHover.html'
        }
      }
    };

    _this.condensedTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/condensed.html'
        }
      }
    };

    _this.extraCondensedTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/extraCondensed.html'
        }
      }
    };

    _this.openTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/open.html'
        }
      }
    };

    _this.unstyledTableExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/tables/unstyled.html'
        }
      }
    };

    _this.actionItemsExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/items/action.html'
        }
      }
    };

    _this.filtersExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/items/filters.html'
        }
      }
    };

    _this.filterSearchExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/items/filterSearch.html'
        }
      }
    };

    _this.utilityItemsExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/items/utility.html'
        }
      }
    };

    _this.utilityItemsDisplayedExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/items/utilityDisplayed.html'
        }
      }
    };

    _this.sortableColumnsExample = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/sortable-columns.html'
        }
      }
    };

    _this.rowDetails = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/row-details.html'
        }
      }
    };

    _this.multipleRowSelection = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/multiple-row-selection.html'
        }
      }
    };

    _this.detailsWithMultipleRowSelection = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/details-with-multiple-row-selection.html'
        }
      }
    };

    _this.singleRow = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/single-row.html'
        }
      }
    };

    _this.multipleRowSelectionViaClick = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/multiple-row-selection-via-click.html'
        }
      }
    };

    _this.nucleo = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/nucleo.html'
        }
      }
    };

    _this.colorNucleo = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/color-nucleo.html'
        }
      }
    };

    _this.rowProgressBar = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/row-progress-bar.html'
        }
      }
    };

    _this.inlineEditing = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/inline-editing.html'
        }
      }
    };

    _this.tabbed = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/working-with-data/tabbed.html'
        }
      }
    };

    _this.paging = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/paging/paging.html'
        },
        js: {
          codeUrl: 'modules/tables/examples/paging/paging.js'
        }
      }
    };

    _this.infiniteScroll = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/infinite-scroll/infinite-scroll.html'
        },
        js: {
          codeUrl: 'modules/tables/examples/infinite-scroll/infinite-scroll.js'
        }
      }
    };

    _this.faceted = {
      tabs: {
        html: {
          codeUrl: 'modules/tables/examples/faceted-search/faceted-search.html'
        },
        js: {
          codeUrl: 'modules/tables/examples/faceted-search/faceted-search.js'
        }
      }
    };

  });
})();
