(function () {
  'use strict';

  angular.module('pb.ds.elements', ['ui.router']);

  // TOASTR CONFIG
  angular.module('pb.ds.elements').config(function (toastrConfig) {
    angular.extend(toastrConfig, {
      // allowHtml: false,
      // autoDismiss: false,
      // closeButton: false,
      closeHtml: '<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path fill="#717171" d="M8 0l-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3 2-2-3-3 3-3z"/></svg>',
      // containerId: 'toast-container',
      // extendedTimeOut: 10000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    // maxOpened: 0,
    // messageClass: 'toast-message',
    // newestOnTop: true,
    // onHidden: null,
    // onShown: null,
    // positionClass: 'toast-top-right',
    // preventDuplicates: false,
    // preventOpenDuplicates: false,
    // progressBar: false,
    // tapToDismiss: true,
    // target: 'body',
    // templates: {
    //   toast: 'directives/toast/toast.html',
    //   progressbar: 'directives/progressbar/progressbar.html'
    // },
    // timeOut: 5000,
    // titleClass: 'toast-title',
    // toastClass: 'toast'
    });
  });
})();
