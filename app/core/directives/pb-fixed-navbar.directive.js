(function() {

  'use strict';

  angular.module('app').directive('pbFixedNavbar', function($log) {
    return {
      restrict: 'AE',
      scope: {

      },
      link: function postLink(scope, element, attrs) {

        switch (attrs.pbFixedNavbar) {
          case 'fixed':

            $('body').addClass('fixed-header');

            element.addClass('navbar-fixed-top');

            $(window).scroll(function() {
              if ($(this).scrollTop() > 20) {
                element.addClass('shadow');
              } else {
                element.removeClass('shadow');
              }
            });

          break;

          case 'sticky':

            var top = 0,
            $element = $(element);

            $element.addClass('navbar-fixed-top');

            $(window).on('scroll', function() {

              var scrollY = this.scrollY;

              if (top < scrollY) {
                $element.slideUp();
              }
              else if (top > scrollY) {
                $element.slideDown();
              }

              top = scrollY;

            });

          break;

          default:

        }


      }
    };
  });

})();


//ng-class="{'navbar-fixed-top': settings.isFixed,'navbar-scroll': !settings.isFixed}"
