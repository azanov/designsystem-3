;(function () {
  'use strict'

  angular.module('pb.ds.hamburger')
    .directive('pbLeftNav', function ($timeout) {
      return {
        restrict: 'EA',
        link: function postLink (scope, element, attrs) {
          var $body = $('body')
          var $menu = element
          var $menuCollapse = $menu.find('.menu-collapse i.fa')
          var $menuHeading = $menu.find('.menu-heading')
          var $menuTitle = $menuHeading.find('.menu-title')
          var $menuItems = $menu.find('.menu-content li a')

          if ($body.hasClass('minified')) {
            $menuTitle.addClass('hide')
          }

          function hideSubmenus () {
            $menuTitle.fadeOut('400', function () {
              $menuTitle.addClass('hide')
              $body.toggleClass('minified')
            })
          }

          $menuCollapse.on({
            click: function (e) {
              if ($body.hasClass('minified')) {
                $body.toggleClass('minified')
                $menuTitle.removeClass('hide').fadeIn(400)
              } else {
                var $menuOpen = $menu.find('li.open')
                var $menuOpenContent = $menuOpen.find('ul.menu-content')

                if ($menuOpen.length > 0) {
                  $menuOpenContent.slideToggle('fast', hideSubmenus())
                  $menuOpen.removeClass('open')
                } else {
                  hideSubmenus()
                }
              }
            }
          })

          $menuHeading.on({
            click: function (e) {
              // if minified and there is a submenu, prevent the click event
              if ($body.hasClass('minified') && $(this).parent().find('ul.menu-content').length > 0) {
                return false
              }

              if (!$body.hasClass('minified')) {
                var $parent = $(this).parent()
                var $children = $parent.children('ul.menu-content')
                var $siblings = $parent.siblings()

                $children.slideToggle(400)
                $parent.toggleClass('open')
                $siblings.removeClass('open').children('ul.menu-content').slideUp(400)
              }
            }
          })

          $menuItems.on({
            click: function (e) {
              $menuItems.removeClass('active')
              $(this).addClass('active')
            }
          })
        }
      }
    })
})()
