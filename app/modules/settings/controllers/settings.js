/* global pbSettings */
/* jshint strict:false */

angular.module('pb.settings').controller('SettingsCtrl', [
  '$log',
  '$scope',
  'languages',
  '$filter',
  'languageFactory',
  function($log, $scope, languages, $filter, languageFactory) {

    var ctrl = this;

    // languages from resolve in ui-router $state config
    ctrl.languages = languages.data.countries;

    ///////

    ctrl.init = function() {

      var code = languageFactory.getStored();

      //filter the country/language on the cookie
      ctrl.selectedCountry = $filter('filter')(ctrl.languages, {
        value: code.country
      })[0];
      ctrl.selectedLanguage = $filter('filter')(ctrl.selectedCountry.languages, {
        value: code.language
      })[0];

      languageFactory.change(ctrl.selectedCountry.value, ctrl.selectedLanguage.value, ctrl.selectedLanguage.rtl);

      // watch the selected country to set the selected language
      $scope.$watch('sc.selectedCountry', function(newVal, oldVal) {
        $log.debug('WATCH:', newVal, oldVal);
        if (newVal !== oldVal) {
          ctrl.selectedLanguage = ctrl.selectedCountry.languages[0];
          ctrl.changeLang();
        }

      });

    };


    ctrl.changeLang = function() {
      languageFactory.change(ctrl.selectedCountry.value, ctrl.selectedLanguage.value, ctrl.selectedLanguage.rtl);
    };


    //run initialize function
    ctrl.init();

  }
]);
