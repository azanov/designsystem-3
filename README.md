PB Design System
================
Download Zip file or Git Clone.

---
###TL;DR:

Production-ready CSS file is `/dist/css/design_system.css`.

**IMPORTANT** instructions to upgrade to version 2.0 see the  [CHANGELOG](https://github.com/PBGUX/designsystem/blob/master/CHANGELOG.md).


---
###Details

The Design System CSS processed and compacted CSS file is in the `/dist/css` directory. To use the design system in your project, copy all folders in the `dist` directory to your project. The fonts folder must be at at the same level as the css folder that contains the design_system.css or else the fonts will not be found.

For example:

```
myapp
|
-- assets
   |
   --css
   --fonts
   --images
```

---

###System Requirements
To build and run the app, you'll need:
- Node
- Gulp
- Bower
- Ruby
- Ruby-sass



######To run the Design System app locally:

- In Terminal, navigate (`cd`) into project directory and run `npm install`, then `bower install`.

- To run and view the source files run `gulp`.  The project will then run out of the `/app` directory.

New versions are posted regularly.  To "update", just replace your copy of `design_system.css` from `/dist/css` directory and also copy the contents of the `/dist/fonts` folder to you local project folder.

For change history, see [CHANGELOG.md](https://github.com/PBGUX/designsystem/blob/master/CHANGELOG.md)
