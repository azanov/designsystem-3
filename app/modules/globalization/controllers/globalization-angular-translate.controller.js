(function() {

  'use strict';

  angular.module('pb.ds.globalization').controller('AngularTranslateController',
  function($log, $scope, $rootScope, languages, $filter, languageFactory, $translate) {

    var _this = this;

    $translate('GLOBALIZATION.CONTROLLER.EXAMPLE').then(function(t) {
      _this.controllerExample = t;
    });

    // languages from resolve in ui-router $state config
    _this.languages = languages.data.countries;

    _this.genders = {
      data: [
        {code: 'M', name: 'GLOBALIZATION.INPUTS.SELECT.MALE'},
        {code: 'F', name: 'GLOBALIZATION.INPUTS.SELECT.FEMALE'}
      ],
      selected: 'M'
    };

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

      _this.changeLang();
      //languageFactory.change(_this.selectedCountry.value, _this.selectedLanguage.value, _this.selectedLanguage.rtl);

      // watch the selected country to set the selected language
      $scope.$watch('translate.selectedCountry', function(newVal, oldVal) {
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

    $rootScope.$on('$translateChangeSuccess', function() {
      $translate('GLOBALIZATION.CONTROLLER.EXAMPLE').then(function(t) {
        _this.headline = t;
      });
    });

    //run initialize function
    _this.init();

  });

})();
