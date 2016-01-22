(function() {

  'use strict';

  angular.module('pb.ds.elements').controller('ContainersController', function($log) {

    var _this = this;

    _this.imageGallery = {
      items: [
        {
          imageName: 'pb_cls_box_157317098'
        },
        {
          imageName: 'pb_cls_box_170998595'
        },
        {
          imageName: 'pb_cls_bzwoman_107430284'
        },
        {
          imageName: 'pb_cls_file_92123815'
        },
        {
          imageName: 'pb_cls_fingr_178480834'
        },
        {
          imageName: 'pb_cls_locatr_175275675'
        },
        {
          imageName: 'pb_cls_man_180408767'
        },
        {
          imageName: 'pb_cls_plan_112156668'
        },
        {
          imageName: 'pb_cls_ship_158636570'
        },
        {
          imageName: 'pb_cls_slots_87144177'
        },
        {
          imageName: 'pb_cls_smbz_143922755'
        },
        {
          imageName: 'pb_cls_sneakrs_501199841'
        },
        {
          imageName: 'pb_cls_string_79342872'
        },
        {
          imageName: 'pb_cls_type_494310307'
        },
        {
          imageName: 'pb_cls_women_175138169'
        }
      ],
      selectedImage: 'test',
      click: function(item) {
        _this.imageGallery.selectedImage = item.imageName;
      },
      settings: {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
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
