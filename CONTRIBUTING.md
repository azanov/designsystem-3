#Contributing

All Design System contributions must adhere to the following coding standards and guidelines.

- [Module Template](#module-template)
- [Sass](#sass)

<br>

---

<br>

##<a name="module-template"></a>Module Template

Use the `/docs/module_template` folder as a starting point to quickly add new modules. All references to 'example' should be changed to the new file names.

<br>

##Modules

###File Naming
`example.module.js`

Modules should not contain routing configuration.

###Structure
```javascript
(function() {

  'use strict';

  angular.module('pb.ds.example', ['ui.router']);

  angular.module('pb.ds.example').run(function($rootScope, $log) {

  });

})();
```

<br>

##Routing

###File Naming
`example.routes.js`

Routes should not contain non-routing code.

###Structure
```javascript
(function() {

  'use strict';

  angular.module('pb.ds.example').config(function($stateProvider) {
    $stateProvider.state('example', {
      url: '/example',
      templateUrl: 'modules/example/templates/example.html',
      controller: 'ExampleController as example',
      resolve: {
        ExampleResolve: function(ExampleFactory) {
          return ExampleFactory.query({key: 'value'}, function(response) {
            return response.data;
          });
        }
      },
      data: {
        pageTitle: 'Example',
        access: 'private',
        bodyClass: 'classname1 classname2'
      }
    });
  });

})();
```

<br>

##Factories

###File Naming
`example.factory.js` or `multiple-word-example.factory.js`

###Structure
```javascript
(function() {

  'use strict';

  angular.module('app').factory('ExampleFactory', function($resource) {

    return $resource('core/data/:filename.json', {
      filename: '@filename'
    });

  });

})();
```

<br>

##Controllers

###File Naming
`example.controller.js` or `multiple-word-example.controller.js`

###Structure
```javascript
(function() {

  'use strict';

  angular.module('app').controller('ExampleController', function($log, ExampleResolve, ExampleFactory) {

    var _this = this;

    _this.example = ExampleResolve;

    _this.something = ExampleFactory.query({key: 'value'});

  });

})();
```

<br>

##ControllerAs
```
ExampleController as example
```

**Do not use shortcut or abbreviations for controllerAs syntax:**
```javascript
/*
Don't do this
*/
ExampleController as ec
```

<br>

##Directives

###File Naming
`pb-example.directive.js` or `multiple-word-example.directive.js`

###Structure
```javascript
(function() {

  'use strict';

  angular.module('app').directive('pbExample', function() {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {

      }
    };
  });

})();
```

<br>

##Templates

###File Naming
`example.html` or `multiple-word-example.html`

Use `data-` on Angular or custom attributes for HTML5 validation.

###Structure
```html
<!-- Repeater Example -->
`<div data-ng-repeat="customer in customers" data-example="property">...</div>`

<!-- Directive example -->
`<div data-property="example" data-pb-example>...</div>`
```

<br>

##Code formatting/hinting/editorconfig/beautify
- tools and links here

<br>

##<a href="sass"></a>Sass
- ???
- Follow Bootstrap class naming conventions
- use skeleton-case-naming
