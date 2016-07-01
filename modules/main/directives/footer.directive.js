(function () {
  'use strict';

  angular.module('app').directive('pbDsFooter', function () {
    return {
      restrict: 'A',
      templateUrl: 'modules/footer/footer.html',
      controller: 'FooterController as footer',
      bindToController: true
    };
  });
})();
