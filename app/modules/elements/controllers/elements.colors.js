'use strict';

angular.module('pb.elements')
  .controller('ColorsCtrl', function($scope, $log, ColorFactory) {


    $scope.colorData = {};

    ColorFactory.getColors().then(function(response) {
      $scope.colorData = response.colors;
      init()
    });


    //   $scope.colorData = colorResolve;


    function init() {

        $scope.colors = {
          blues: {
            $blue1: $scope.colorData.blues[0].hex,
            $blue2: $scope.colorData.blues[1].hex,
            $blue3: $scope.colorData.blues[2].hex,
            $blue4: $scope.colorData.blues[3].hex,
            $blue5: $scope.colorData.blues[4].hex,
            $blue6: $scope.colorData.blues[5].hex,
            all: function() {
              return [this.$blue1, this.$blue2, this.$blue3, this.$blue4, this.$blue5, this.$blue6];
            }
          },
          grays: {
            $gray1: $scope.colorData.chartgrays[0].hex,
            $gray2: $scope.colorData.chartgrays[1].hex,
            $gray3: $scope.colorData.chartgrays[2].hex,
            $gray4: $scope.colorData.chartgrays[3].hex,
            $gray5: $scope.colorData.chartgrays[4].hex,
            $gray6: $scope.colorData.chartgrays[5].hex,
            all: function() {
              return [this.$gray1, this.$gray2, this.$gray3, this.$gray4, this.$gray5, this.$gray6];
            }
          },
          charts: {
            $green: $scope.colorData.charts[0].hex,
            $blue: $scope.colorData.charts[1].hex,
            $purple: $scope.colorData.charts[2].hex,
            $yellow: $scope.colorData.charts[3].hex,
            $orange: $scope.colorData.charts[4].hex,
            $red: $scope.colorData.charts[5].hex,
            all: function() {
              return [this.$green, this.$blue, this.$purple, this.$yellow, this.$orange, this.$red];
            }
          }
        };

      } //end init


    //generate easypiechart
    $scope.easypiechart = function(size, barColor, lineWidth, percent) {
      var config = {
        "options": {
          "animate": {
            "enabled": false
          },
          "size": size,
          "barColor": barColor,
          "scaleColor": false,
          "lineWidth": lineWidth,
          "lineCap": 'circle',
          "trackColor": '#f2f2f2'
        },
        "percent": percent
      };

      return config;
    };



  });
