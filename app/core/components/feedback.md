#Module

Follow the ui-bootstrap example for module naming and dependencies, the main module name is repeated in each submodule followed by the component name.

__UI-Bootstrap example:__
```js
angular.module("ui.bootstrap", [
  "ui.bootstrap.tpls",
  "ui.bootstrap.collapse",
  "ui.bootstrap.accordion",
  "ui.bootstrap.alert",
  "ui.bootstrap.buttons",
  ...
]);
```

__Design System Suggested:__
```js
angular.module("pb.ds.components", [
  "pb.ds.components.checkbox",
  "pb.ds.components.radiobutton",
  "pb.ds.components.somethingelse",
  ...
]);
```

#Filenames / structure

Components are developed in the `app/core` folder with the following folder and file names. The final build output will be in the `dist/js` folder as a single JS file in both minified and unminified versions.

__Development folder structure__
```
app
└─ core
  └─ pb.ds.components
    ├─ pb.ds.components.js //the main module with dependencies
    ├─ pb.ds.checkbox.js
    ├─ pb.ds.radiobutton.js //both single and group directives
    └─ pb.ds.somethingelse.js
```

__Build output__ (_need to be sure ng-annotate is run on the final output (this can be done in usemin), there should be a config in the main component module to turn off $log_)
```
dist
├─ css
├─ fonts
└─ js
  ├─ pb.ds.components.js
  └─ pb.ds.components.min.js
```

__To use DS components:__

Link to the JS file in the index.html:

```html
<script src="bower_components/pb-design-system/dist/js/pb.ds.components.js" />
```

Add the components as a dependency in your Angular application:

```js
angular.module('myApp', [
  'pb.ds.components',
  'some.component',
  'some.component'
]);
```


#Components
- all JS should be formatted using [eslint](http://eslint.org/), there is a .eslintrc.json file in the repo
- replace all console.log() with $log.debug(); see notes on build process to disable $log messages
- follow ui-bootstrap code structure for defining components:
  ```js
  angular.module('pb.ds.components.checkbox', [])

  .constant('pbdsCheckboxConfig', {
    someConfig: true
  })

  .controller('pbdsCheckboxController', function($scope, $attrs, pbdsCheckboxConfig) {
    // controller code here
  }])

  .directive('pbdsCheckbox', function() {
    return {
      controller: 'pbdsCheckboxController',
      controllerAs: 'checkbox',
      ...
      template: '<html>here {{checkbox.data}}</html>' //need to look into using $templateCache in future
    };
  });
  ```
- all directive elements should follow the following naming convention, custom attributes should be prepended with namespace:
  ```html
  <pbds-checkbox ng-model="ctrl.isChecked" pbds-label="Some label" pbds-standard="true"></pbds-checkbox>

  <pbds-something pbds-some-attribute="false"></pbds-something>
  ```
- need to show examples using localization (done in template attribute or in controller?)
- Use `===` and `!==`, not `==` or `!=` (strict equality checking)
- follow multi-line template formatting (\ only supported by ES5 per eslint, this may be OK for browsers we support looking at caniuse.com)
  ```js
  template: '<label ng-class="{\'control radio\':ctrl.custom,\'disabled\':ctrl.disable==\'disabled\'}">\n' +
      '<input name="{{ctrl.name}}" type="radio" ng-disabled="ctrl.disabled" value="{{ctrl.value}}" ng-model="ctrl.ngModel" ng-change="ctrl.onChange()" />\n' +
      '<span ng-if="ctrl.custom" class="control-indicator"></span>\n' +
      '{{ctrl.label}}\n' +
    '</label>'
  ```
- How can we ensure these controls are unit testable?
