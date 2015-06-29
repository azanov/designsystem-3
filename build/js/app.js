!function(){"use strict";angular.module("app",["pb.core","pb.dashboard","pb.ds.elements","pb.settings","pb.ds.pages","pb.ds.tables","pb.ds.notification","pb.ds.graphs","pb.ds.localization","pb.ds.brand","pb.ds.helpers","pb.ds.forms"]),angular.module("app").config(["$logProvider","config",function(e,t){e.debugEnabled(t.debug)}]),angular.module("app").config(["$compileProvider","config",function(e,t){e.debugInfoEnabled(t.debug)}]),angular.module("app").config(["$tooltipProvider",function(e){e.options({appendToBody:!0})}]),angular.module("app").config(["$stateProvider",function(e){e.state("otherwise",{url:"*path",template:"",controller:["$state",function(e){e.go("dashboard")}]})}]),angular.module("app").run(["$rootScope","$state","$stateParams","$log",function(e,t,o,l){e.$on("$stateChangeStart",function(e,t,o,a){l.debug("To State:",t,"From state:",a),!t||!t.data}),e.$on("$stateChangeError",function(e,t,o,a,n,r){l.debug("$stateChangeError: ",r)}),e.$on("$stateNotFound",function(e){l.debug("$stateNotFound: ",e)})}])}(),function(){"use strict";angular.module("app").constant("config",{debug:!1})}(),function(){"use strict";angular.module("app").controller("AppController",["$rootScope","$state",function(e,t){var o=this;e.$state=t,o.header="animated",o.footer=!1}])}(),function(){"use strict";angular.module("app").controller("HeaderController",["$log","MockDataFactory",function(e,t){var o=this;o.nav=t.query({filename:"navigation"}),o.predicate="label"}])}(),function(){"use strict";angular.module("app").directive("header",function(){return{restrict:"E",templateUrl:"modules/main/templates/header.html",controller:"HeaderController as header"}})}(),function(){"use strict";angular.module("app").directive("footer",function(){return{restrict:"E",templateUrl:"modules/main/templates/footer.html",controller:"",controllerAs:""}})}(),function(){"use strict";angular.module("pb.ds.pages",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.pages").config(["$stateProvider",function(e){e.state("pages",{"abstract":!0,templateUrl:"modules/pages/templates/pages.html",controller:"PagesController as pages",data:{pageTitle:"Pages",access:"public",bodyClass:"signin"}}).state("pages.signin",{url:"/pages/signin",templateUrl:"modules/pages/templates/signin.html",controller:"SignInController as signin"}).state("pages.forgotpassword",{url:"/pages/forgotpassword",templateUrl:"modules/pages/templates/forgot-password.html",controller:"ForgotPasswordController as forgot"}).state("pages.welcome",{url:"/pages/welcome",templateUrl:"modules/pages/templates/welcome.html",controller:"WelcomeController as welcome"}).state("pages.registration",{url:"/pages/registration",templateUrl:"modules/pages/templates/registration.html",controller:"RegistrationController as registration"}).state("pages.undermaintenance",{url:"/pages/undermaintenance",templateUrl:"modules/pages/templates/under-maintenance.html",controller:"UnderMaintenanceController as under"}).state("pages.500",{url:"/pages/500",templateUrl:"modules/pages/templates/500.html",controller:"500Controller"}).state("pages.404",{url:"/pages/404",templateUrl:"modules/pages/templates/404.html",controller:"404Controller"})}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("PagesController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("404Controller",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("404Controller",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("ForgotPasswordController",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("RegistrationController",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("SignInController",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("UnderMaintentanceController",["$log",function(){var e=this;e.showHeaderFooter=!1}])}(),function(){"use strict";angular.module("pb.ds.pages").controller("WelcomeController",["$log","$state",function(e,t){var o=this;o.showHeaderFooter=!1,o.sendUsername=function(){null!==o.emailAddress?(o.isValid=!0,o.isInvalid=!1):(o.isInvalid=!0,o.isValid=!1)},o.setPassword=function(){t.go("dashboard")}}])}(),function(){"use strict";angular.module("pb.ds.forms",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.forms").config(["$stateProvider",function(e){e.state("forms",{"abstract":!0,templateUrl:"modules/forms/templates/forms.html",controller:"FormsController as forms",data:{pageTitle:"Forms",access:"public",bodyClass:"forms"}}).state("forms.basic",{url:"/forms/basic",templateUrl:"modules/forms/templates/forms-basic.html",controller:"FormsController as forms",data:{pageTitle:"Forms",access:"public",bodyClass:"forms"}}).state("forms.addressbook",{url:"/forms/addressbook",templateUrl:"modules/forms/templates/forms-address-book.html",controller:"AddressBookController as addressbook",data:{pageTitle:"Address Book",access:"public",bodyClass:"forms"}}).state("forms.addressblocks",{url:"/forms/addressblocks",templateUrl:"modules/forms/templates/forms-address-blocks.html",controller:"AddressBlocksController as addressblocks",data:{pageTitle:"Address Blocks",access:"public",bodyClass:"forms"}}).state("forms.wizard",{templateUrl:"modules/forms/templates/forms-wizard.html",controller:"WizardController as wizard",data:{pageTitle:"Wizard",access:"public",bodyClass:"forms"}}).state("forms.addanother",{templateUrl:"modules/forms/templates/forms-add-another.html",controller:"AddAnotherController as addanother",data:{pageTitle:"Add another",access:"public",bodyClass:"forms"}}).state("forms.approval",{templateUrl:"modules/forms/templates/forms-approval.html",controller:"ApprovalController as approval",data:{pageTitle:"Approval",access:"public",bodyClass:"forms"}}).state("forms.validation",{templateUrl:"modules/forms/templates/forms-validation.html",controller:"ValidationController as val",data:{pageTitle:"Validation",access:"public",bodyClass:"forms"}}).state("forms.inlinehelp",{templateUrl:"modules/forms/templates/forms-inlne-help.html",controller:"HelpController as help",data:{pageTitle:"Help",access:"public",bodyClass:"forms help"}})}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("FormsController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("FormsController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("AddAnotherController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("FormsController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("AddressBookController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("ApprovalController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("ValidationController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.forms").controller("HelpController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.core",["ngCookies","ngAnimate","ngResource","ngSanitize","ui.router","headroom","angular-loading-bar","pascalprecht.translate","tmh.dynamicLocale","selectize-ng","toggle-switch","toastr","ui.bootstrap","ui.utils","ui-rangeSlider","chart.js","stpa.morris","daterangepicker","angularMoment","angularUtils.directives.dirPagination"])}(),function(){"use strict";angular.module("app").directive("pbFixedNavbar",["$log",function(){return{restrict:"AE",scope:{},link:function(e,t,o){switch(o.pbFixedNavbar){case"fixed":$("body").addClass("fixed-header"),t.addClass("navbar-fixed-top"),$(window).scroll(function(){$(this).scrollTop()>20?t.addClass("shadow"):t.removeClass("shadow")});break;case"sticky":var l=0,a=$(t);a.addClass("navbar-fixed-top"),$(window).on("scroll",function(){var e=this.scrollY;e>l?a.slideUp():l>e&&a.slideDown(),l=e})}}}}])}(),function(){"use strict";angular.module("app").directive("pbPanelCollapsible",function(){return{restrict:"EA",scope:{iconOpen:"@",iconClosed:"@"},link:function(e,t){var o={iconOpen:e.iconOpen?e.iconOpen:"glyphicon glyphicon-chevron-up",iconClosed:e.iconClosed?e.iconClosed:"glyphicon glyphicon-chevron-down"};t.addClass("collapse-btn "+o.iconOpen),t.on("click",function(e){var t=$(this).hasClass("closed"),l=$(this).closest(".panel").find(".panel-body");t?(l.slideDown(200),$(this).removeClass(o.iconClosed+" closed").addClass(o.iconOpen)):(l.slideUp(200),$(this).removeClass(o.iconOpen).addClass(o.iconClosed+" closed")),e.preventDefault()})}}})}(),function(){"use strict";angular.module("app").directive("pbPanelDraggable",function(){return{restrict:"EA",require:"ngModel",scope:{ngModel:"="},link:function(e,t){t.find(".column").sortable(e.ngModel).disableSelection()}}})}(),function(){"use strict";angular.module("app").directive("pbTransitoryAlert",function(){return{restrict:"A",require:"ngModel",scope:{ngModel:"="},template:'<span ng-transclude></span><span class="btn-response" style="display: none; " ng-class="ngModel.messageClass" ng-bind-html="ngModel.message" ></span>',transclude:!0,link:function(e,t){var o=e.ngModel.fadeIn||500,l=e.ngModel.fadeOut||1e3,a=e.ngModel.delay||2e3,n=t.find("span.btn-response");t.on({click:function(){return n.is(":visible")?!1:void n.fadeIn(o).delay(a).fadeOut(l)}})}}})}(),function(){"use strict";angular.module("app").directive("pbAccordion",function(){return{restrict:"AE",link:function(e,t){$(t).find(".panel-default").on({"show.bs.collapse":function(){$(this).addClass("active")},"hide.bs.collapse":function(){$(this).removeClass("active")}})}}})}(),function(){"use strict";angular.module("app").directive("pbNumericStepper",function(){return{restrict:"EA",scope:{options:"="},link:function(e,t){t.stepper(e.options)}}})}(),function(){"use strict";angular.module("app").directive("pbDatetimepicker",function(){return{restrict:"EA",require:"ngModel",scope:{ngModel:"="},link:function(e,t){t.datetimepicker(e.ngModel)}}})}(),function(){"use strict";angular.module("app").directive("pbBootstrapPopover",function(){return{restrict:"AE",link:function(e,t){$(t).popover()}}})}(),function(){"use strict";angular.module("app").directive("pbButtonProgress",function(){return{restrict:"A",require:"ngModel",scope:{ngModel:"="},link:function(e,t){e.ngModel.defaultText=t.text();var o=e.ngModel.iconClass?e.ngModel.iconClass:e.ngModel.iconClass="fa-circle-o-notch",l=e.ngModel.speed?e.ngModel.speed:e.ngModel.speed=1.5;e.$watch("ngModel.isLoading",function(a){a?(t.addClass("loading"),t.text(e.ngModel.text),t.prepend('<i class="fa '+o+' fa-spin"></i>&nbsp;&nbsp;'),t.find("i.fa").css({"-webkit-animation":"fa-spin "+l+"s infinite linear",animation:"fa-spin "+l+"s infinite linear"}),t.prop("disabled",!0)):(t.removeClass("loading"),t.text(e.ngModel.defaultText),t.prop("disabled",!1))})}}})}(),function(){"use strict";angular.module("app").directive("pbModalDraggable",["$document",function(e){return{restrict:"EA",link:function(t,o){function l(e){n.offset({top:e.pageY-u,left:e.pageX-c})}function a(){e.off("mousemove",l),e.off("mouseup",a)}o.addClass("draggable");var n=o.find(".modal-content"),r={},s=0,i=0,c=0,u=0;e.on("mousedown",function(t){var o=n.offset();s=o.left,i=o.top,u=t.pageY-o.top,c=t.pageX-o.left,e.on("mousemove",l),e.on("mouseup",a)}),o.on("shown.bs.modal",function(){r=n.offset()}),o.on("hidden.bs.modal",function(){n.removeAttr("style")})}}}])}(),function(){"use strict";angular.module("app").factory("MockDataFactory",["$resource",function(e){return e("core/data/:filename.json",{filename:"@filename"})}])}(),function(){"use strict";angular.module("pb.dashboard",["ui.router"])}(),function(){"use strict";angular.module("pb.dashboard").config(["$stateProvider",function(e){e.state("dashboard",{url:"/dashboard",templateUrl:"modules/dashboard/templates/dashboard.html",controller:"DashboardController as dash",resolve:{NavigationResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"navigation"})}]},data:{pageTitle:"Dashboard",access:"public",bodyClass:"home"}})}])}(),function(){"use strict";angular.module("pb.dashboard").controller("DashboardController",["$log","NavigationResolve",function(e,t){var o=this;o.navdata=t}])}(),function(){"use strict";angular.module("pb.ds.elements",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.elements").config(["$stateProvider",function(e){e.state("elements",{url:"/elements","abstract":!0,templateUrl:"modules/elements/templates/elements.html",controller:"ElementsController as elements",resolve:{NavigationResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"navigation"})}]},data:{pageTitle:"Elements",access:"private"}}).state("elements.buttons",{url:"/elements/buttons",templateUrl:"modules/elements/templates/elements-buttons.html"}).state("elements.accordion",{url:"/elements/accordion",templateUrl:"modules/elements/templates/elements-accordion.html",controller:"AccordionController as accordion"}).state("elements.colorcharts",{url:"/elements/colorcharts",templateUrl:"modules/elements/templates/elements-colors-charts.html",controller:"ChartColorsController as charts",resolve:{ColorsResolve:["$log","MockDataFactory",function(e,t){return t.get({filename:"colors"}).$promise.then(function(e){return e})}]}}).state("elements.grid",{url:"/elements/grid",templateUrl:"modules/elements/templates/elements-grid.html"}).state("elements.icons",{url:"/elements/icons",templateUrl:"modules/elements/templates/elements-icons.html",controller:"IconsController as icons",resolve:{IconsResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"fontawesome"})}]}}).state("elements.inputs",{url:"/elements/inputs",templateUrl:"modules/elements/templates/elements-inputs.html",controller:"InputsController as inputs",resolve:{PeopleResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"people_10"})}],CountriesResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"countries"})}]}}).state("elements.panels",{url:"/elements/panels",templateUrl:"modules/elements/templates/elements-panels.html",controller:"PanelsController as panels",resolve:{PeopleResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"people"})}],MillerResolve:["$log","MockDataFactory",function(e,t){return t.get({filename:"millercolumn"},function(e){return e.versionInfos})}]}}).state("elements.popovers",{url:"/elements/popovers",templateUrl:"modules/elements/templates/elements-popovers.html",controller:"BootstrapUiPopoverController as pop"}).state("elements.progress",{url:"/elements/progress",templateUrl:"modules/elements/templates/elements-progress.html",controller:"ProgressController as progress"}).state("elements.tabs",{url:"/elements/tabs",templateUrl:"modules/elements/templates/elements-tabs.html",controller:"TabsController as tabs"})}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("ElementsController",["$log","NavigationResolve",function(e,t){var o=this;o.leftNav=t[1]}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("ChartColorsController",["$log","ColorsResolve",function(e,t){var o=this;o.colorData=t.colors,o.colors={blues:{$blue1:o.colorData.blues[0].hex,$blue2:o.colorData.blues[1].hex,$blue3:o.colorData.blues[2].hex,$blue4:o.colorData.blues[3].hex,$blue5:o.colorData.blues[4].hex,$blue6:o.colorData.blues[5].hex},grays:{$gray1:o.colorData.chartgrays[0].hex,$gray2:o.colorData.chartgrays[1].hex,$gray3:o.colorData.chartgrays[2].hex,$gray4:o.colorData.chartgrays[3].hex,$gray5:o.colorData.chartgrays[4].hex,$gray6:o.colorData.chartgrays[5].hex},charts:{$green:o.colorData.charts[0].hex,$blue:o.colorData.charts[1].hex,$purple:o.colorData.charts[2].hex,$yellow:o.colorData.charts[3].hex,$orange:o.colorData.charts[4].hex,$red:o.colorData.charts[5].hex}}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("IconsController",["$log","IconsResolve",function(e,t){var o=this;o.faIcons=t,o.pbIcons=["addressbook","addtocatalog","addtofolder","catalog","connection","databaseconnection","filesystemconnection","folder","labellayer","layer","line","map","metadata","metadatatemplate","newcatalog","newconnection","newfolder","newlayer","newmap","newtable","newtile","point","polygon","scale","table","tile","treeview"]}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("InputsController",["$log","CountriesResolve","PeopleResolve",function(e,t,o){var l=this;l.numericStepper={limit:[0],wheelStep:1,arrowStep:1},l.datetimepicker1={pickTime:!1},l.datetimepicker2={pickDate:!1},l.samplePeople=o,l.choices1=[{id:"choice1"}],l.choices2=[{id:"choice1",num:"222-555-3456"}],l.choices3=[{id:"choice1"}],l.choices4=[{id:"choice1",num:"222-555-3456"}],l.maxChoices=3,l.addNewChoice=function(e){var t=e.length+1;e.push({id:"choice"+t})},l.showAddChoice=function(e,t){return t.length!==l.maxChoices},l.peopleSelect={options:{valueField:"email",labelField:"name",searchField:["name"],render:{option:function(e){var t="";return t+="<div>",t+='<div style="font-size: 16px;">'+e.name+"</div>",t+='<div style="">'+e.email+"</div>",t+="</div>"}}},selected:{},people:[{name:"Adam",email:"adam@email.com"},{name:"Amalie",email:"amalie@email.com"},{name:"Estefanía",email:"estefania@email.com"},{name:"Adrian",email:"adrian@email.com"},{name:"Wladimir",email:"wladimir@email.com"},{name:"Samantha",email:"samantha@email.com"},{name:"Nicole",email:"nicole@email.com"},{name:"Natasha",email:"natasha@email.com"},{name:"Michael",email:"michael@email.com"},{name:"Nicolás",email:"nicole@email.com"}]},l.countrySelect={options:{valueField:"code",labelField:"name",searchField:["name"]},selected:{},countries:t},l.multiCountrySelect={options:{valueField:"code",labelField:"name",searchField:["name"],plugins:["remove_button"]},selected:{},countries:t},l.switchStatus1=!1,l.switchStatus2=!1,l.switchStatus3=!0,l.switchStatus4=!1}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("ProgressController",["$log","$timeout","cfpLoadingBar",function(e,t,o){var l=this;l.startProgress=function(){o.start(),t(function(){o.complete()},4e3)},l.buttonLoading={isLoading:!1,text:"Saving",load:function(){l.buttonLoading.isLoading=!0,t(function(){l.buttonLoading.isLoading=!1},2e3)}},l.buttonLoading2={isLoading:!1,text:"Updating",speed:.75,iconClass:"fa-refresh",load:function(){l.buttonLoading2.isLoading=!0,t(function(){l.buttonLoading2.isLoading=!1},3e3)}}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("AccordionController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("PanelsController",["$log","PeopleResolve","MillerResolve",function(e,t,o){var l=this;l.people=t,l.millercolumn={data:o,level1:null,level2:null},l.getSublevel1=function(e){l.millercolumn.level1=l.millercolumn.data.versionInfos[e].versionInfos,l.millercolumn.dataSelected=e,l.millercolumn.level2=null,l.millercolumn.level1Selected=null},l.getSublevel2=function(e){l.millercolumn.level2=l.millercolumn.level1[e].versionInfos,l.millercolumn.level1Selected=e},l.draggable={connectWith:".column",handle:".panel-heading",cursor:"move",placeholder:"placeholder",forcePlaceholderSize:!0,opacity:.4}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("ElementsController",["$log","NavigationResolve",function(e,t){var o=this;o.leftNav=t[1]}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("TabsController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("UiBootstrapController",["$log","$modal","$timeout","$window",function(e,t,o,l){var a=this;a.modals={simple:function(){t.open({templateUrl:"modules/components/modals/elements-simple.html",controller:"BootstrapUiSimpleModalController"})},modal:function(){t.open({templateUrl:"modules/elements/modals/elements-modal.html",controller:"BootstrapUiModalController",keyboard:!1,backdrop:"static"})},prompt:function(){t.open({templateUrl:"modules/elements/modals/elements-prompt.html",controller:"BootstrapUiPromptModalController",keyboard:!1,backdrop:"static"}).result.then(function(e){a.fullname=e})},draggable:function(){t.open({windowTemplateUrl:"modules/elements/modals/elements-draggable-template.html",templateUrl:"modules/elements/modals/elements-draggable.html",controller:"BootstrapUiDraggableModalController",keyboard:!1,backdrop:"static"})}},a.calendar={format:"MMMM dd, yyyy",options:{formatYear:"yyyy",startingDay:1,showWeeks:!1,showButtonBar:!1},open:function(e){e.preventDefault(),e.stopPropagation(),a.calendar.opened=!0}},a.time={menuClick:function(e){e.preventDefault()}},a.tabs={tabset01:[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0}],tabset02:[{title:"Dynamic Title X",content:"Dynamic content X"},{title:"Dynamic Title Y",content:"Dynamic content Y",disabled:!0}],tabset03:[{title:"Dynamic Title A",content:"Dynamic content A"},{title:"Dynamic Title B",content:"Dynamic content B",disabled:!0}],alert:function(){o(function(){l.alert("You've selected the alert tab!")})}}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("BootstrapUiPopoverController",["$scope",function(){var e=this;e.dynamicPopover={content:"Hello, World!",templateUrl:"myPopoverTemplate.html",title:"Title"}}])}(),function(){"use strict";angular.module("pb.settings",["ui.router"]),angular.module("pb.settings").config(["$translateProvider","$translatePartialLoaderProvider",function(e,t){e.useLoaderCache(!0),e.useLoader("$translatePartialLoader",{urlTemplate:"{part}/{lang}.json"}),t.addPart("modules/i18n"),e.preferredLanguage("en-us"),e.fallbackLanguage("en-us"),e.useLocalStorage()}]),angular.module("pb.settings").config(["tmhDynamicLocaleProvider",function(e){e.useCookieStorage("NG_TRANSLATE_LANG_KEY"),e.localeLocationPattern("modules/i18n/angular-i18n/angular-locale_{{locale}}.js")}]),angular.module("pb.settings").run(["$rootScope","$log","$translate",function(e,t,o){e.$on("$translatePartialLoaderStructureChanged",function(){o.refresh()})}])}(),function(){"use strict";angular.module("pb.settings").config(["$stateProvider",function(e){e.state("settings",{url:"/settings",templateUrl:"modules/settings/templates/settings.html",controller:"SettingsController as settings",resolve:{translate:["$translatePartialLoader",function(e){e.addPart("modules/settings/i18n")}],languages:["languageFactory",function(e){return e.get()}]},data:{pageTitle:"Settings",access:"private"}})}])}(),function(){"use strict";angular.module("pb.settings").controller("SettingsController",["$log","$scope","languages","$filter","languageFactory",function(e,t,o,l,a){var n=this;n.header={types:["normal","animated","fixed","hamburger"]},n.languages=o.data.countries,n.init=function(){var o=a.getStored();n.selectedCountry=l("filter")(n.languages,{value:o.country})[0],n.selectedLanguage=l("filter")(n.selectedCountry.languages,{value:o.language})[0],a.change(n.selectedCountry.value,n.selectedLanguage.value,n.selectedLanguage.rtl),t.$watch("settings.selectedCountry",function(t,o){e.debug("WATCH:",t,o),t!==o&&(n.selectedLanguage=n.selectedCountry.languages[0],n.changeLang())})},n.changeLang=function(){a.change(n.selectedCountry.value,n.selectedLanguage.value,n.selectedLanguage.rtl)},n.init()}])}(),function(){"use strict";angular.module("pb.settings").factory("languageFactory",["$log","$translateLocalStorage","$rootScope","$translate","tmhDynamicLocale","$http",function(e,t,o,l,a,n){var r={};return r.get=function(){return n.get("core/config/languages.json")},r.getStored=function(){var e=t.get("NG_TRANSLATE_LANG_KEY"),o=e.split("-"),l=o[0],a=o[1].toLowerCase(),n={code:e,language:l,country:a};return n},r.change=function(e,t,n){var r=t+"-"+e;o.rtl=n?"rtl":"ltr",l.use(r),a.set(r)},r}])}(),function(){"use strict";angular.module("pb.ds.tables",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.tables").config(["$stateProvider",function(e){e.state("tables",{"abstract":!0,url:"/tables",templateUrl:"modules/tables/templates/tables.html",controller:"TablesController as tables",data:{pageTitle:"Tables",access:"public",bodyClass:"tables"}}).state("tables.simple",{url:"/lib1",templateUrl:"modules/tables/templates/tables-simple.html",controller:"TablesSimpleController as simple",resolve:{PeopleResolve:["$log","MockDataFactory",function(e,t){return t.query({filename:"people"})}]}}).state("tables.datatable",{url:"/datatable",templateUrl:"modules/tables/templates/tables-datatable.html",controller:"TablesDatatableController as datatable"}).state("tables.advanced1",{url:"/advanced1",templateUrl:"modules/tables/templates/tables-advanced1.html",controller:"TablesAdvanced1Controller as advanced1"}).state("tables.facetedsearch",{url:"/facetedsearch",templateUrl:"modules/tables/templates/tables-faceted-search.html",controller:"TablesFacetedSearchController as faceted"})}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesSimpleController",["$log","PeopleResolve",function(e,t){var o=this;o.people=t}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesDatatableController",["$log","MockDataFactory","moment",function(e,t,o){var l=this;l.table={data:t.query({filename:"ds_users"}),sort:{type:"first_name",reverse:!1,change:function(e){l.table.sort.type=e,l.table.sort.reverse=!l.table.sort.reverse}},paging:{size:10,sizes:[10,25,50,100]},groups:{min:10,max:"Infinity"},search:{},searchClear:function(){l.table.search.$=""},selectedRows:[],selectRow:function(e){-1===l.table.selectedRows.indexOf(e.id)?l.table.selectedRows.push(e.id):(l.table.selectedRows.splice(l.table.selectedRows.indexOf(e.id),1),l.table.allRowsSelected=!1)},selectAllRows:function(){var e=!l.table.selectAllFilteredRows();l.table.selectedRows=[],angular.forEach(l.table.dataFiltered,function(t){t.selected=e,e&&l.table.selectedRows.push(t.id)})},selectAllFilteredRows:function(){var e=0;return angular.forEach(l.table.dataFiltered,function(t){t.selected&&e++}),0!==e&&e===l.table.dataFiltered.length},daterangepicker:{date:{startDate:o().startOf("month"),endDate:o().endOf("month")},options:{singleDatePicker:!1,ranges:{Today:[o(),o()],Yesterday:[o().subtract(1,"days"),o().subtract(1,"days")],"Last 7 Days":[o().subtract(6,"days"),o()],"Last 30 Days":[o().subtract(29,"days"),o()],"This Month":[o().startOf("month"),o().endOf("month")],"Last Month":[o().subtract(1,"month").startOf("month"),o().subtract(1,"month").endOf("month")]}}}}}]),angular.module("pb.ds.tables").filter("daterange",["$log","moment",function(e,t){return function(e,o,l){var a=t(o).unix(),n=t(l).unix(),r=[];return angular.forEach(e,function(e){var o=t(e.date.created).unix();o>a&&n>o&&r.push(e)}),r}}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesAdvanced1Controller",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesFacetedSearchController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.notification",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.notification").config(["$stateProvider",function(e){e.state("notification",{"abstract":!0,templateUrl:"modules/notification/templates/notification.html",controller:"NotificationController as notification",data:{pageTitle:"Notification",access:"public",bodyClass:"notification"}}).state("notification.toastr",{url:"/notification/toastr",templateUrl:"modules/notification/templates/notification-toastr.html",controller:"ToastrController as toastr"}).state("notification.spinners",{url:"/notification/spinners",templateUrl:"modules/notification/templates/notification-spinners.html",controller:"SpinnersController as spinners"}).state("notification.loadingbar",{url:"/notification/loadingbar",templateUrl:"modules/notification/templates/notification-loadingbar.html",controller:"LoadingBarController as loadingbar"}).state("notification.alerts",{url:"/notification/alerts",templateUrl:"modules/notification/templates/notification-alerts.html",controller:"AlertsController as alerts"}).state("notification.headermessage",{url:"/notification/headermessage",templateUrl:"modules/notification/templates/notification-header-message.html",controller:"HeaderMessageController as message"})}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("NotificationController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("AlertsController",["$log","toastr","$modal",function(e,t,o){var l=this;l.transitoryAlert={fadeIn:500,fadeOut:1e3,delay:2e3,message:"<strong>Success!</strong> Data was saved.",messageClass:"text-success"},l.toast={danger:function(){t.error("It is dangerous to remain here. You must leave within two days.","Message as follows:")},success:function(){t.success("I am completely operational, and all my circuits are functioning perfectly.")},info:function(){t.info("The 9000 series is the most reliable computer ever made.")},warning:function(){t.warning("Just what do you think you're doing, Dave?")}},l.modals={simple:function(){o.open({templateUrl:"modules/notification/templates/modals/notification-simple.html",controller:"BootstrapUiSimpleModalController"})},modal:function(){o.open({templateUrl:"modules/notification/templates/modals/notification-modal.html",controller:"BootstrapUiModalController",keyboard:!1,backdrop:"static"})},prompt:function(){o.open({templateUrl:"modules/notification/templates/modals/notification-prompt.html",controller:"BootstrapUiPromptModalController",keyboard:!1,backdrop:"static"}).result.then(function(e){l.fullname=e})},draggable:function(){o.open({windowTemplateUrl:"modules/notification/templates/modals/notification-draggable-template.html",templateUrl:"modules/notification/templates/modals/notification-draggable.html",controller:"BootstrapUiDraggableModalController",keyboard:!1,backdrop:"static"})}}}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("HeaderMessageController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("LoadingBarController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("SpinnersController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.notification").controller("ToastrController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("BootstrapUiModalController",["$scope","$modalInstance",function(e,t){e.close=function(){t.close()}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("BootstrapUiDraggableModalController",["$scope","$modalInstance",function(e,t){e.close=function(){t.close()}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("BootstrapUiPromptModalController",["$scope","$modalInstance",function(e,t){e.fullname="",e.close=function(){t.close()},e.save=function(){t.close(e.form.fullname.$modelValue)}}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("BootstrapUiSimpleModalController",["$scope","$modalInstance",function(e,t){e.close=function(){t.close()}}])}(),function(){"use strict";angular.module("pb.ds.graphs",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.graphs").config(["$stateProvider",function(e){e.state("graphs",{"abstract":!0,url:"/graphs",templateUrl:"modules/graphs/templates/graphs.html",controller:"GraphsController as graphs",data:{pageTitle:"Graphs",access:"public",bodyClass:"graphs"}}).state("graphs.morris",{url:"/morris",templateUrl:"modules/graphs/templates/graphs-morris.html",controller:"MorrisController as morris"}).state("graphs.lib2",{url:"/lib2",templateUrl:"modules/graphs/templates/graphs-lib2.html",controller:"Lib2Controller as lib2"}).state("graphs.lib3",{url:"/lib3",templateUrl:"modules/graphs/templates/graphs-lib3.html",controller:"Lib3Controller as lib3"})
}])}(),function(){"use strict";angular.module("pb.ds.graphs").controller("GraphsController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.graphs").controller("MorrisController",["$log",function(){var e=this;e.donut={data:[{label:"Download Sales",value:12},{label:"In-Store Sales",value:30},{label:"Mail-Order Sales",value:20}]},e.bar={data:[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],barX:"y",barY:["a","b"],barLabels:["Series A","Series B"]},e.line={data:[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],xKey:"y",yKeys:["a","b"],labels:["Serie A","Serie B"]},e.area={data:[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],xKey:"y",yKeys:["a","b"],labels:["Serie A","Serie B"]}}])}(),function(){"use strict";angular.module("pb.ds.graphs").controller("Lib2Controller",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.graphs").controller("Lib3Controller",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.brand",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.brand").config(["$stateProvider",function(e){e.state("brand",{"abstract":!0,url:"/brand",templateUrl:"modules/brand/templates/brand.html",controller:"BrandController as brand",data:{pageTitle:"Brand",access:"public",bodyClass:"brand"}}).state("brand.styleguide",{url:"/styleguide",templateUrl:"modules/brand/templates/brand-styleguide.html",controller:"StyleGuideController as style",resolve:{ColorsResolve:["$log","MockDataFactory",function(e,t){return t.get({filename:"colors"})}]},data:{pageTitle:"Brand - Style Guide",bodyClass:"styleguide"}}).state("brand.color",{url:"/color",templateUrl:"modules/brand/templates/brand-color.html",controller:"ColorsController as colors",resolve:{ColorsResolve:["$log","MockDataFactory",function(e,t){return t.get({filename:"colors"})}]},data:{pageTitle:"Brand - Colors"}}).state("brand.typography",{url:"/typography",templateUrl:"modules/brand/templates/brand-typography.html",controller:"TypographyController as type",data:{pageTitle:"Brand - Typogrphy"}}).state("brand.logo",{url:"/logo",templateUrl:"modules/brand/templates/brand-logo.html",controller:"LogoController as logo",data:{pageTitle:"Brand - Logo"}}).state("brand.font",{url:"/font",templateUrl:"modules/brand/templates/brand-font.html",controller:"FontController as font",data:{pageTitle:"Brand - Font"}})}])}(),function(){"use strict";angular.module("pb.ds.brand").controller("BrandController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.elements").controller("ColorsController",["$log","ColorsResolve",function(e,t){var o=this;o.colorData=t.colors,o.colors={blues:{$blue1:o.colorData.blues[0].hex,$blue2:o.colorData.blues[1].hex,$blue3:o.colorData.blues[2].hex,$blue4:o.colorData.blues[3].hex,$blue5:o.colorData.blues[4].hex,$blue6:o.colorData.blues[5].hex,all:function(){return[this.$blue1,this.$blue2,this.$blue3,this.$blue4,this.$blue5,this.$blue6]}},grays:{$gray1:o.colorData.chartgrays[0].hex,$gray2:o.colorData.chartgrays[1].hex,$gray3:o.colorData.chartgrays[2].hex,$gray4:o.colorData.chartgrays[3].hex,$gray5:o.colorData.chartgrays[4].hex,$gray6:o.colorData.chartgrays[5].hex,all:function(){return[this.$gray1,this.$gray2,this.$gray3,this.$gray4,this.$gray5,this.$gray6]}},charts:{$green:o.colorData.charts[0].hex,$blue:o.colorData.charts[1].hex,$purple:o.colorData.charts[2].hex,$yellow:o.colorData.charts[3].hex,$orange:o.colorData.charts[4].hex,$red:o.colorData.charts[5].hex,all:function(){return[this.$green,this.$blue,this.$purple,this.$yellow,this.$orange,this.$red]}}}}])}(),function(){"use strict";angular.module("pb.ds.brand").controller("TypographyController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.brand").controller("LogoController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.brand").controller("FontController",["$log",function(){var e=this;e.fonts=[{fontName:"Precision Sans Light",font:"PrecisionSans_W_Lt"},{fontName:"Precision Sans Light Italic",font:"PrecisionSans_W_LtIt"},{fontName:"Precision Sans Regular",font:"PrecisionSans_W_Rg"},{fontName:"Precision Sans Regular Italic",font:"PrecisionSans_W_RgIt"},{fontName:"Precision Sans Medium",font:"PrecisionSans_W_Md"},{fontName:"Precision Sans Medium Italic",font:"PrecisionSans_W_MdIt"},{fontName:"Precision Sans Bold",font:"PrecisionSans_W_Bd"},{fontName:"Precision Sans Bold Italic",font:"PrecisionSans_W_BdIt"}]}])}(),function(){"use strict";angular.module("pb.ds.brand").controller("StyleGuideController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.localization",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.localization").config(["$stateProvider",function(e){e.state("localization",{url:"/localization",templateUrl:"modules/localization/templates/localization.html",controller:"LocalizationController as localization",data:{pageTitle:"Localization",access:"public",bodyClass:"localization"}})}])}(),function(){"use strict";angular.module("pb.ds.localization").controller("LocalizationController",["$log",function(){}])}(),function(){"use strict";angular.module("pb.ds.helpers",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.helpers").config(["$stateProvider",function(e){e.state("helpers",{url:"/helpers",templateUrl:"modules/helpers/templates/helpers.html",controller:"HelpersController as helpers",data:{pageTitle:"Helpers",access:"public",bodyClass:"helpers"}})}])}(),function(){"use strict";angular.module("pb.ds.helpers").controller("HelpersController",["$log",function(){}])}();