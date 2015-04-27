(function() {

  'use strict';

  angular.module('app', [
    //third party modules are in /core/core.module.js
    'pb.core',
    'pb.dashboard',
    'pb.components',
    'pb.elements',
    'pb.settings',
    'pb.signin'
  ]);

  //configure debugging
  angular.module('app').config(function($logProvider, config) {
    $logProvider.debugEnabled(config.debug);
  });

  //configure production mode
  angular.module('app').config(function($compileProvider, config) {
    $compileProvider.debugInfoEnabled(config.debug);
  });

  // UI ROUTER CONFIG
  angular.module('app').config(function($stateProvider) {
    $stateProvider.state('otherwise', {
      url: '*path',
      template: '',
      controller: function($state) {
        $state.go('dashboard');
      }
    });
  });

  angular.module('app').run(function($rootScope, $state, $stateParams, $log) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $log.debug(
        'To State:', toState,
        'From state:', fromState
      );

      if (!toState || !toState.data) {
        return;
      }

    });

    $rootScope.$on('$stateChangeError', function(event, toState, tpParams, fromState, fromParams, error) {
      $log.debug('$stateChangeError: ', error);
    });

    $rootScope.$on('$stateNotFound', function(unfoundState) {
      $log.debug('$stateNotFound: ', unfoundState);
    });

  });

})();

(function() {

  'use strict';

  //app constants
  angular.module('app').constant('config', {
    debug: true
  });

})();

(function() {

  'use strict';

  angular.module('app').controller('AppCtrl', function($rootScope, $state) {

    var _this = this;
    $rootScope.$state = $state;

  });

})();

(function() {

  'use strict';

  angular.module('app').controller('HeaderCtrl', function($log, MockDataFactory) {

    var _this = this;

    _this.nav = MockDataFactory.query({filename: 'navigation'});

  });

})();

(function() {

  'use strict';

  angular.module('app').directive('header', function() {
    return {
      restrict: 'EA',
      templateUrl: 'modules/main/templates/header.html',
      controller: 'HeaderCtrl as hc'
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('footer', function() {
    return {
      restrict: 'EA',
      templateUrl: 'modules/main/templates/footer.html',
      controller: '',
      controllerAs: ''
    };
  });

})();

(function() {

  'use strict';

  angular.module('pb.core', [
    'ngCookies',
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'angular-loading-bar',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'selectize-ng',
    'toggle-switch',
    'ui.bootstrap',
    'ui-rangeSlider',
    'chart.js'
  ]);

})();

(function() {

  'use strict';

  angular.module('app').directive('pbFixedNavbar', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {

        $('body').addClass('fixed-header');

        $(window).scroll(function() {
          if ($(this).scrollTop() > 20) {
            element.addClass('shadow');
          } else {
            element.removeClass('shadow');
          }
        });
      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbPanelCollapsible', function() {
    return {
      restrict: 'EA',
      scope: {
        iconOpen: '@',
        iconClosed: '@'
      },
      link: function postLink(scope, element, attrs) {

        var options = {
          iconOpen: (scope.iconOpen) ? scope.iconOpen : 'glyphicon glyphicon-chevron-up',
          iconClosed: (scope.iconClosed) ? scope.iconClosed : 'glyphicon glyphicon-chevron-down'
        };

        element.addClass('collapse-btn ' + options.iconOpen);

        element.on('click', function(event) {
          var isOpen = $(this).hasClass('closed'),
            $panelBody = $(this).closest('.panel').find('.panel-body');

          if (!isOpen) {
            $panelBody.slideUp(200);
            $(this).removeClass(options.iconOpen).addClass(options.iconClosed + ' closed');
          } else {
            $panelBody.slideDown(200);
            $(this).removeClass(options.iconClosed + ' closed').addClass(options.iconOpen);
          }

          event.preventDefault();
        });
      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbPanelDraggable', function() {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.find('.column').sortable(scope.ngModel).disableSelection();
      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbTransitoryAlert', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      template: '<span ng-transclude></span><span class="btn-response" style="display: none; " ng-class="ngModel.messageClass" ng-bind-html="ngModel.message" ></span>',
      transclude: true,
      link: function postLink(scope, element, attrs) {

        var fadeIn = scope.ngModel.fadeIn || 500,
          fadeOut = scope.ngModel.fadeOut || 1000,
          delay = scope.ngModel.delay || 2000;

        var $message = element.find('span.btn-response');

        element.on({
          click: function() {
            if ($message.is(':visible')) {
              return false;
            } else {
              $message.fadeIn(fadeIn).delay(delay).fadeOut(fadeOut);
            }
          }
        });

      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbAccordion', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {

        $(element).find('.panel-default').on({
          'show.bs.collapse': function(event) {
            $(this).addClass('active');
          },
          'hide.bs.collapse': function(event) {
            $(this).removeClass('active');
          }
        });

      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbNumericStepper', function() {
    return {
      restrict: 'EA',
      scope: {
        options: '='
      },
      link: function postLink(scope, element, attrs) {
        element.stepper(scope.options);
      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbDatetimepicker', function() {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs, ngModel) {
        element.datetimepicker(scope.ngModel);
      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbBootstrapPopover', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {

        $(element).popover();

      }
    };
  });

})();

(function() {

  'use strict';

  angular.module('app').directive('pbButtonProgress', function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
          ngModel: '='
        },
        link: function postLink(scope, element, attrs, ngModel) {

          //store the element text
          scope.ngModel.defaultText = element.text();

          //set the default fa-icon
          var icon = (scope.ngModel.iconClass) ? scope.ngModel.iconClass : scope.ngModel.iconClass = 'fa-circle-o-notch';

          //set the default speed
          var speed = (scope.ngModel.speed) ? scope.ngModel.speed : scope.ngModel.speed = 1.5;

          scope.$watch('ngModel.isLoading', function(newVal, oldVal) {
            //console.log(newVal, oldVal);
            if (newVal) {
              element.addClass('loading');
              element.text(scope.ngModel.text);
              element.prepend('<i class="fa ' + icon + ' fa-spin"></i>&nbsp;&nbsp;');
              element.find('i.fa').css({
                '-webkit-animation': 'fa-spin ' + speed + 's infinite linear',
                animation: 'fa-spin ' + speed + 's infinite linear'
              });
              element.prop('disabled', true);
            } else {
              element.removeClass('loading');
              element.text(scope.ngModel.defaultText);
              element.prop('disabled', false);
            }
          });
        }
      };
    });

})();

(function() {

  'use strict';


  angular.module('app')
    .directive('pbModalDraggable', ['$document',
      function($document) {
        return {
          restrict: 'EA',
          link: function postLink(scope, element, attrs) {

            element.addClass('draggable');

            var $content = element.find('.modal-content'),
              defaultOffset = {},
              offsetX = 0,
              offsetY = 0,
              mouseXdelta = 0,
              mouseYdelta = 0;

            $document.on('mousedown', function(event) {

              var offset = $content.offset();

              offsetX = offset.left;
              offsetY = offset.top;

              mouseYdelta = event.pageY - offset.top;
              mouseXdelta = event.pageX - offset.left;

              $document.on('mousemove', mousemove);
              $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
              $content.offset({
                top: event.pageY - mouseYdelta,
                left: event.pageX - mouseXdelta
              });
            }

            function mouseup() {
              $document.off('mousemove', mousemove);
              $document.off('mouseup', mouseup);
            }

            element.on('shown.bs.modal', function(e) {
              defaultOffset = $content.offset();
            });

            element.on('hidden.bs.modal', function(e) {
              $content.removeAttr('style');
            });

          }
        };
      }
    ]);

})();

(function() {

  'use strict';

  angular.module('app').factory('MockDataFactory', function($resource) {

    return $resource('core/data/:filename.json', {
      filename: '@filename'
    });

  });

})();

(function() {

  'use strict';

  angular.module('pb.dashboard', [
    'ui.router'
  ]);

  angular.module('pb.dashboard').config(function($stateProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl as dash',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/dashboard/i18n');
        },
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Dashboard',
        access: 'public',
        bodyclass: 'home'
      }
    });
  });

})();

(function() {

  'use strict';

  angular.module('pb.dashboard').controller('DashboardCtrl', function($log, NavigationResolve) {

    var _this = this;

    _this.navdata = NavigationResolve;

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements', ['ui.router']);

})();

(function() {

  'use strict';

  angular.module('pb.elements').config(function($stateProvider) {
    $stateProvider.state('elements', {
      url: '/elements',
      abstract: true,
      templateUrl: 'modules/elements/templates/elements.html',
      controller: 'ElementsController as elements',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/elements/i18n');
        },
        NavigationResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'navigation'});
        }
      },
      data: {
        pageTitle: 'Elements',
        access: 'private'
      }
    })

    .state('elements.alerts', {
      url: '/alerts',
      templateUrl: 'modules/elements/templates/elements-alerts.html',
      controller: 'AlertsController as alerts'
    })

    .state('elements.buttons', {
      url: '/buttons',
      templateUrl: 'modules/elements/templates/elements-buttons.html'
    })

    .state('elements.colors', {
      url: '/colors',
      templateUrl: 'modules/elements/templates/elements-colors.html',
      controller: 'ColorsController as colors',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      }
    })

    .state('elements.colorusage', {
      url: '/colorusage',
      templateUrl: 'modules/elements/templates/elements-colors-usage.html',
      controller: 'ColorUsageController as usage'
    })

    .state('elements.colorcharts', {
      url: '/colorcharts',
      templateUrl: 'modules/elements/templates/elements-colors-charts.html',
      controller: 'ChartColorsController as charts',
      resolve: {
        ColorsResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'colors'});
        }
      }
    })

    .state('elements.grid', {
      url: '/grid',
      templateUrl: 'modules/elements/templates/elements-grid.html'
    })

    .state('elements.icons', {
      url: '/icons',
      templateUrl: 'modules/elements/templates/elements-icons.html',
      controller: 'IconsController as icons',
      resolve: {
        IconsResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'fontawesome'});
        }
      }
    })

    .state('elements.inputs', {
      url: '/inputs',
      templateUrl: 'modules/elements/templates/elements-inputs.html',
      controller: 'InputsController as inputs',
      resolve: {
        CountriesResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'countries'});
        }
      }
    })

    .state('elements.popovers', {
      url: '/popovers',
      templateUrl: 'modules/elements/templates/elements-popovers.html'
    })

    .state('elements.progress', {
      url: '/progress',
      templateUrl: 'modules/elements/templates/elements-progress.html',
      controller: 'ProgressController as progress'
    })

    .state('elements.tables', {
      url: '/tables',
      templateUrl: 'modules/elements/templates/elements-tables.html',
      controller: 'TablesController as tables',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'});
        }
      }
    })
    
    .state('elements.typography', {
      url: '/typography',
      templateUrl: 'modules/elements/templates/elements-typography.html'
    });
  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('ElementsController', function($log, NavigationResolve) {

    var _this = this;
    
    _this.leftNav = NavigationResolve[1];

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('ColorsController', function($log, ColorsResolve) {

    var _this = this;

    _this.colorData = ColorsResolve.colors;

    _this.colors = {
      blues: {
        $blue1: _this.colorData.blues[0].hex,
        $blue2: _this.colorData.blues[1].hex,
        $blue3: _this.colorData.blues[2].hex,
        $blue4: _this.colorData.blues[3].hex,
        $blue5: _this.colorData.blues[4].hex,
        $blue6: _this.colorData.blues[5].hex,
        all: function() {
          return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
        }
      },
      grays: {
        $gray1: _this.colorData.chartgrays[0].hex,
        $gray2: _this.colorData.chartgrays[1].hex,
        $gray3: _this.colorData.chartgrays[2].hex,
        $gray4: _this.colorData.chartgrays[3].hex,
        $gray5: _this.colorData.chartgrays[4].hex,
        $gray6: _this.colorData.chartgrays[5].hex,
        all: function() {
          return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
        }
      },
      charts: {
        $green: _this.colorData.charts[0].hex,
        $blue: _this.colorData.charts[1].hex,
        $purple: _this.colorData.charts[2].hex,
        $yellow: _this.colorData.charts[3].hex,
        $orange: _this.colorData.charts[4].hex,
        $red: _this.colorData.charts[5].hex,
        all: function() {
          return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red];
        }
      }
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('ColorUsageController', function($log) {

    var _this = this;

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('ChartColorsController', function($log, ColorsResolve) {

    var _this = this;

    _this.colorData = ColorsResolve.colors;

    _this.colors = {
      blues: {
        $blue1: _this.colorData.blues[0].hex,
        $blue2: _this.colorData.blues[1].hex,
        $blue3: _this.colorData.blues[2].hex,
        $blue4: _this.colorData.blues[3].hex,
        $blue5: _this.colorData.blues[4].hex,
        $blue6: _this.colorData.blues[5].hex,
        all: function() {
          return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
        }
      },
      grays: {
        $gray1: _this.colorData.chartgrays[0].hex,
        $gray2: _this.colorData.chartgrays[1].hex,
        $gray3: _this.colorData.chartgrays[2].hex,
        $gray4: _this.colorData.chartgrays[3].hex,
        $gray5: _this.colorData.chartgrays[4].hex,
        $gray6: _this.colorData.chartgrays[5].hex,
        all: function() {
          return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
        }
      },
      charts: {
        $green: _this.colorData.charts[0].hex,
        $blue: _this.colorData.charts[1].hex,
        $purple: _this.colorData.charts[2].hex,
        $yellow: _this.colorData.charts[3].hex,
        $orange: _this.colorData.charts[4].hex,
        $red: _this.colorData.charts[5].hex,
        all: function() {
          return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red];
        }
      }
    };

    _this.charts = {
      gray: {
        sixColor: {
          data: [50, 45, 40, 35, 30, 25],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#414141', '#4e4e4e', '#686868', '#818181', '#9b9b9b', '#c0c0c0'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 12,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 12
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: ['#414141', '#686868', '#9b9b9b'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      },
      blue: {
        sixColor: {
          data: [300, 500, 100, 200, 300, 400],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#3e53a4', '#5d71be', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          colorsAccent: ['#3e53a4', '#ef8200', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 12,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 12
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: ['#3e53a4', '#8393d0', '#afb9dd'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      },
      multi: {
        sixColor: {
          data: [300, 500, 100, 200, 300, 400],
          barData: [[50], [45], [40], [35], [30], [25]],
          labels: ['', '', '', '', '', ''],
          barLabels: [''],
          colors: ['#00B140', '#009DBF', '#A03F9B', '#EDB700', '#EF8200', '#CF0989'],
          colorsAccent: ['#3e53a4', '#ef8200', '#8393d0', '#9aa6d6', '#afb9dd', '#c5cbe4'],
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 60,
            scaleShowGridLines: false,
            barShowStroke: true,
            barStrokeWidth: 14,
            showScale: false,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStartValue: 0,
            scaleStepWidth: 10,
            barDatasetSpacing: 6
          }
        },
        threeColor: {
          data: [33, 33, 33],
          labels: ['', '', ''],
          colors: {
            other1: ['#00B140', '#A03F9B', '#EF8200'],
            other2: ['#009DBF', '#EDB700', '#CF0989'],
            first3: ['#00B140', '#009DBF', '#A03F9B'],
            last3: ['#EDB700', '#EF8200', '#CF0989'],
            traffic: ['#00B140', '#EDB700', '#CF0989'],
            mono: ['#3e53a4', '#8393d0', '#afb9dd']
          },
          options: {
            showTooltips: false,
            segmentShowStroke: false,
            percentageInnerCutout: 0
          }
        }
      }
    };


  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('AlertsController', function($log) {

    var _this = this;

    _this.transitoryAlert = {
      fadeIn: 500,
      fadeOut: 1000,
      delay: 2000,
      message: '<strong>Success!</strong> Data was saved.',
      messageClass: 'text-success'
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('IconsController', function($log, IconsResolve) {

    var _this = this;

    _this.faIcons = IconsResolve;

    _this.pbIcons =  [
      'addressbook',
      'addtocatalog',
      'addtofolder',
      'catalog',
      'connection',
      'databaseconnection',
      'filesystemconnection',
      'folder',
      'labellayer',
      'layer',
      'line',
      'map',
      'metadata',
      'metadatatemplate',
      'newcatalog',
      'newconnection',
      'newfolder',
      'newlayer',
      'newmap',
      'newtable',
      'newtile',
      'point',
      'polygon',
      'scale',
      'table',
      'tile',
      'treeview'
    ];

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('InputsController', function($log, CountriesResolve) {

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

    _this.switchStatus1 = false;
    _this.switchStatus2 = false;
    _this.switchStatus3 = true;
    _this.switchStatus4 = false;

  });

})()

(function() {

  'use strict';

  angular.module('pb.elements').controller('ProgressController', function($log, $timeout, cfpLoadingBar) {

    var _this = this;

    //TODO: range slider, maybe use these instead:
    //https://github.com/seiyria/angular-bootstrap-slider
    //https://github.com/seiyria/bootstrap-slider

    _this.startProgress = function() {
      cfpLoadingBar.start();
      $timeout(function() {
        cfpLoadingBar.complete();
      }, 4000);
    };

    _this.buttonLoading = {
      isLoading: false,
      text: 'Saving',
      load: function() {
        _this.buttonLoading.isLoading = true;
        $timeout(function() {
          _this.buttonLoading.isLoading = false;
        }, 2000);
      }
    };

    _this.buttonLoading2 = {
      isLoading: false,
      text: 'Updating',
      speed: 0.75,
      iconClass: 'fa-refresh',
      load: function() {
        _this.buttonLoading2.isLoading = true;
        $timeout(function() {
          _this.buttonLoading2.isLoading = false;
        }, 3000);
      }
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.elements').controller('TablesController', function($log, PeopleResolve) {

    var _this = this;

    _this.people = PeopleResolve;

  });

})();

(function() {

  'use strict';

  angular.module('pb.components', ['ui.router']);

  angular.module('pb.components').config(function($stateProvider) {
    $stateProvider.state('components', {
      url: '/components',
      abstract: true,
      templateUrl: 'modules/components/templates/components.html',
      controller: 'ComponentsCtrl as components',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/components/i18n');
        }
      },
      data: {
        pageTitle: 'Components',
        access: 'private'
      }
    })
    .state('components.accordion', {
      url: '/accordion',
      templateUrl: 'modules/components/templates/components.accordion.html',
      controller: 'AccordionCtrl as accordion'
    })
    .state('components.panels', {
      url: '/panels',
      templateUrl: 'modules/components/templates/components.panels.html',
      controller: 'PanelsController as panels',
      resolve: {
        PeopleResolve: function($log, MockDataFactory) {
          return MockDataFactory.query({filename: 'people'}, function(response) {
            return response;
          });
        },
        MillerResolve: function($log, MockDataFactory) {
          return MockDataFactory.get({filename: 'millercolumn'}, function(response) {
            return response.versionInfos;
          });
        }
      }
    })
    .state('components.tabs', {
      url: '/tabs',
      templateUrl: 'modules/components/templates/components.tabs.html',
      controller: 'TabsCtrl as tabs'
    })

    .state('components.uibootstrap', {
      url: '/uibootstrap',
      templateUrl: 'modules/components/templates/components.uibootstrap.html',
      controller: 'UIBootstrapCtrl'
    });

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('ComponentsCtrl', function($log) {

    var _this = this;

  });

})();

(function() {

  'use strict';

  (function() {

    angular.module('pb.components').controller('AccordionCtrl', function($log) {

      var _this = this;

    });

  })();


})();

(function() {

  'use strict';

  angular.module('pb.components').controller('PanelsController', function($log, PeopleResolve, MillerResolve) {

    var _this = this;

    _this.people = PeopleResolve;

    _this.millercolumn = {
        data: MillerResolve,
        level1: null,
        level2: null
      };

    _this.getSublevel1 = function(index) {
      _this.millercolumn.level1 = _this.millercolumn.data.versionInfos[index].versionInfos;
      _this.millercolumn.dataSelected = index;
      _this.millercolumn.level2 = null;
      _this.millercolumn.level1Selected = null;

      //$log.log(_this.millercolumn.level1);
    };

    _this.getSublevel2 = function(index) {
      _this.millercolumn.level2 = _this.millercolumn.level1[index].versionInfos;
      _this.millercolumn.level1Selected = index;
    };

    //draggable options
    _this.draggable = {
      connectWith: '.column',
      handle: '.panel-heading',
      cursor: 'move',
      placeholder: 'placeholder',
      forcePlaceholderSize: true,
      opacity: 0.4
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('TabsCtrl', function($log) {

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('UIBootstrapCtrl', function($log, $scope, $modal, $timeout, $window) {

    $scope.modals = {
      simple: function() {
        $modal.open({
          templateUrl: 'modules/components/templates/bootstrap-ui/modals/simple.html',
          controller: 'BootstrapUiSimpleModalCtrl'
        });
      },
      modal: function() {
        $modal.open({
          templateUrl: 'modules/components/templates/bootstrap-ui/modals/modal.html',
          controller: 'BootstrapUiModalCtrl',
          keyboard: false,
          backdrop: 'static'
        });
      },
      prompt: function() {
        $modal.open({
          templateUrl: 'modules/components/templates/bootstrap-ui/modals/prompt.html',
          controller: 'BootstrapUiPromptModalCtrl',
          keyboard: false,
          backdrop: 'static'
        }).result.then(function(fullname) {
          $scope.fullname = fullname;
        });
      },
      draggable: function() {
        $modal.open({
          windowTemplateUrl: 'modules/components/templates/bootstrap-ui/modals/draggable-window-template.html',
          templateUrl: 'modules/components/templates/bootstrap-ui/modals/draggable.html',
          controller: 'BootstrapUiDraggableModalCtrl',
          keyboard: false,
          backdrop: 'static'
        });
      }
    };

    $scope.calendar = {
      format: 'MMMM dd, yyyy',
      options: {
        formatYear: 'yyyy',
        startingDay: 1,
        showWeeks: false,
        showButtonBar: false
      },
      open: function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.calendar.opened = true;
      }
    };

    $scope.time = {
      menuClick: function(event) {
        event.preventDefault();
      }
    };

    $scope.tabs = {
      tabset01: [{
        title: 'Dynamic Title 1',
        content: 'Dynamic content 1'
      }, {
        title: 'Dynamic Title 2',
        content: 'Dynamic content 2',
        disabled: true
      }],
      tabset02: [{
        title: 'Dynamic Title X',
        content: 'Dynamic content X'
      }, {
        title: 'Dynamic Title Y',
        content: 'Dynamic content Y',
        disabled: true
      }],
      tabset03: [{
        title: 'Dynamic Title A',
        content: 'Dynamic content A'
      }, {
        title: 'Dynamic Title B',
        content: 'Dynamic content B',
        disabled: true
      }],
      alert: function(event) {
        $timeout(function() {
          $window.alert('You\'ve selected the alert tab!');
        });
      }
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiModalCtrl', function($scope, $modalInstance) {
    $scope.close = function() {
      $modalInstance.close();
    };
  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiDraggableModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiPromptModalCtrl', function($scope, $modalInstance) {

    $scope.fullname = '';

    $scope.close = function() {
      $modalInstance.close();
    };

    $scope.save = function() {
      $modalInstance.close($scope.form.fullname.$modelValue);
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.components').controller('BootstrapUiSimpleModalCtrl', function($scope, $modalInstance) {

    $scope.close = function() {
      $modalInstance.close();
    };

  });

})();

(function() {

  'use strict';

  angular.module('pb.settings', ['ui.router']);

  // TRANSLATE CONFIG
  angular.module('pb.settings').config(function($translateProvider, $translatePartialLoaderProvider) {

    $translateProvider.useLoaderCache(true);

    $translateProvider.useLoader('$translatePartialLoader', {
      urlTemplate: '{part}/{lang}.json'
    });

    //additional parts loaded in module controllers
    $translatePartialLoaderProvider.addPart('modules/i18n');

    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');
    $translateProvider.useLocalStorage();
  });

  // DYNAMIC LOCALE CONFIG
  angular.module('pb.settings').config(function(tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');

    //gulp copies the i18n locale files from bower_components to modules/i18n
    tmhDynamicLocaleProvider.localeLocationPattern('/modules/i18n/angular-i18n/angular-locale_{{locale}}.js');

  });

  angular.module('pb.settings').run(function($rootScope, $log, $translate) {

    //refresh as parts are added in controllers
    $rootScope.$on('$translatePartialLoaderStructureChanged', function() {
      $translate.refresh();
    });

  });

})();

(function() {

  'use strict';

  angular.module('pb.settings').config(function($stateProvider) {
    $stateProvider.state('settings', {
      url: '/settings',
      templateUrl: 'modules/settings/templates/settings.html',
      controller: 'SettingsCtrl as settings',
      resolve: {
        translate: function($translatePartialLoader) {
          $translatePartialLoader.addPart('/modules/settings/i18n');
        },
        languages: function(languageFactory) {
          return languageFactory.get();
        }
      },
      data: {
        pageTitle: 'Settings',
        access: 'private'
      }
    });
  });

})();

(function() {

  'use strict';

  angular.module('pb.settings').controller('SettingsCtrl', function($log, $scope, languages, $filter, languageFactory) {

    var _this = this;

    // languages from resolve in ui-router $state config
    _this.languages = languages.data.countries;

    ///////

    _this.init = function() {

      var code = languageFactory.getStored();

      //filter the country/language on the cookie
      _this.selectedCountry = $filter('filter')(_this.languages, {
        value: code.country
      })[0];

      _this.selectedLanguage = $filter('filter')(_this.selectedCountry.languages, {
        value: code.language
      })[0];

      languageFactory.change(_this.selectedCountry.value, _this.selectedLanguage.value, _this.selectedLanguage.rtl);

      // watch the selected country to set the selected language
      $scope.$watch('settings.selectedCountry', function(newVal, oldVal) {
        $log.debug('WATCH:', newVal, oldVal);
        if (newVal !== oldVal) {
          _this.selectedLanguage = _this.selectedCountry.languages[0];
          _this.changeLang();
        }

      });

    };

    _this.changeLang = function() {
      languageFactory.change(_this.selectedCountry.value, _this.selectedLanguage.value, _this.selectedLanguage.rtl);
    };

    //run initialize function
    _this.init();

  });

})();

(function() {

  'use strict';

  angular.module('pb.settings').factory('languageFactory', function($log, $translateLocalStorage, $rootScope, $translate, tmhDynamicLocale, $http) {

    var lang = {};

    lang.get = function() {
      return $http.get('/core/config/languages.json');
    };

    lang.getStored = function() {

      var code = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY'),
        codeArray = code.split('-'),
        language = codeArray[0],
        country = codeArray[1],
        obj = {
          code: code,
          language: language,
          country: country
        };

      return obj;
    };

    lang.change = function(country, language, rtl) {

      var code = language + '-' + country;

      $rootScope.rtl = (rtl) ? 'rtl' : 'ltr';

      $translate.use(code);
      tmhDynamicLocale.set(code.toLowerCase());
    };

    return lang;

  });

})();

(function() {

  'use strict';

  angular.module('pb.signin', ['ui.router']);

  angular.module('pb.signin').config(function($stateProvider) {
    $stateProvider.state('signin', {
      url: '/signin',
      abstract: false,
      templateUrl: 'modules/signin/templates/signin.html',
      controller: 'SigninCtrl as signin',
      data: {
        pageTitle: 'Sign In',
        access: 'public',
        bodyclass: 'signin'
      }
    });
  });

})();

(function() {

  'use strict';

  angular.module('pb.signin').controller('SigninCtrl', function($scope, $log) {

    var _this = this;

    _this.showHeaderFooter = false;

  });

})();
