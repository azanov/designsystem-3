(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('ContainersController', function($log) {

    var _this = this;

    _this.imageGallery = {
      items: [1,2,3,4,5,6,7,8,9,10,11,12],
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      }
    }

    _this.itemGallery = {
      items: [
        {
          title: 'Self Assessment',
          icon: 'fa-search',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Capital Gains Tax',
          icon: 'fa-umbrella',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Child Benefit',
          icon: 'fa-wifi',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Corporation Tax',
          icon: 'fa-user',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Income Tax',
          icon: 'fa-shopping-cart',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Inheritance Tax',
          icon: 'fa-user',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'Premium Tax',
          icon: 'fa-glass',
          description: 'Lorem ipsum dolor'
        },
        {
          title: 'National Insurance',
          icon: 'fa-tint',
          description: 'Lorem ipsum dolor'
        }
      ],
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
    }

  });

})();
