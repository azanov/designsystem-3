(function() {

  'use strict';

  angular.module('pb.settings').factory('languageFactory', function($log, $translateLocalStorage, $rootScope, $translate, tmhDynamicLocale, $http) {

    var language = {};

    language.get = function() {
      return $http.get('core/config/languages.json');
    };

    language.getStored = function() {

      var code = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY'),
        codeArray = code.split('-'),
        language = codeArray[0],
        country = codeArray[1].toLowerCase(),
        obj = {
          code: code,
          language: language,
          country: country
        };

      return obj;
    };

    language.change = function(country, language, rtl) {

      var code = language + '-' + country;

      $rootScope.rtl = (rtl) ? 'rtl' : 'ltr';

      $translate.use(code);
      tmhDynamicLocale.set(code);
    };

    return language;

  });

})();
