##Release Notes

###1.3.4  April 9, 2015
- Fixed header fonts to be Precision Sans Light
- Fixed typos on Text page

###1.3.3 March 24, 2015
- added condensed definition list.  Add class "dlist-condensed" to any DL
- added banner task to gulp; css file will not be stamped with time and version
- changed CSS output to "compact"

###1.3.2 March 24, 2015
- fixed header font sizes to match Victor's specs
- fixed font to Precision Sans Light
- added utility no-margin classes

###1.3.1 March 13, 2015
- Added missing "scales" glyph in PB font, updated font to [1.5.3](https://github.com/PBGUX/pb-font/tree/1.5.3)

###1.3.0 March 11,2015
- New color assignments, based on a 5-color "chord 1"
- Normalized colors of all items, such as form fields, buttons, panels, etc.
- Removed a lot of non-Bootstrap css to use defaults wherever possible
- Integrated UI-Bootstrap overrides into DS css.
- Updated a couple of Bower components.

###1.2.0 Feb 20,2015
- Added "sign-in screen"
- fixed button hovers to lighten button instead of darken

###1.1.5 Feb 19, 2015
- bug in default button hover state fixed

###1.1.4 Feb 19, 2015
- renamed spacer classes.  2-letter sizes now: xs, sm, md, lg, xl. If you have used these, you will need to find/replace.

###1.1.3 Feb 18, 2015
- fixed modal backdrop

###1.1.2 Feb. 17, 2015
- fixed alert links to aways be underlined

###1.10 February 12, 2015
- re-organized and simplified color variables
- reverted alert and callout colors to Bootstrap defaults
- reverted functional colors (except Danger) to Bootstrap defaults
- re-organized buttons to re-use as much Bootstrap code as possible
- hard-coded link color to be pb-dark-blue no matter active chord
- changed buttons to use 4th color in chord (active chord = pb-purple)
- a great deal of scss code cleaned up

###1.05 February 11, 2015
- fixed , hopefully for good, button text color on open dropdown buttons
- added PB favicons.  They are in `/images/favicons`, so to use them upload this directory and copy the code in head of `index.html`

###1.04 February 6, 2015
- Added "spacer" classes to add margins above and/or below objects.
- Use `spacer-top.xsm`, `spacer-top.sm`, `spacer-top.med`, `spacer-top.lg`, `spacer-top.xlg` (or `-bottom-`) to add margin of 10, 20, 30, 40, or 50 pixels, respectively.


###1.03 February 4, 2015
- Updated variables to match Bootstrap 3.32 structure
- Updated Bootstrap CDN to 3.32
- Updated Font Awesome CDN to 4.3.0
- Removed some deprecated Sass/CSS
- Fixed arrows in numeric stepper control to use FA glyphs
- cleaned up Sass files for readability
- clarified alert link text does not need separate class

###1.01 February 3, 2015
- Fixed space above DT (Issue #7)
- Fixed functional colors hex labels

###1.0 January 14, 2015
- Incorporates color and typography changes for new branding
- Switched build system from Grunt to Gulp
- Simplified folder structure

----------------
#####Upgrading to 1.0.0 from previous versions

- Copy `/build/css/design_system.css` and overwrite your project design system CSS file
- Remove `<head>` links to fonts hosted at Google, for example:
```html
<link href="http://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic,700italic" rel="stylesheet" type="text/css">
```
- Copy all PrecisionSans fonts from `/build/fonts` to your project fonts folder
- Replace the copyright column in the footer with the following markup:

```html
<!-- Copyright -->
<div class="col-md-6">
	<a href="http://www.pb.com"><i class="pb-footer-logo gradient"></i></a>&copy; 2015 Pitney Bowes Inc. All rights reserved.
</div>
```

----------------

<br/>
###0.9.6.1
- fixed color bug in button dropdown

###0.9.6
- updated Miller Columns to not respond to window resizing.  As indicated on page, they are desktop-only at this point; they will now resize up to a point, but will not stack.

###0.9.5 December 18, 2014
- Updated PB Font to use new icons from Beth and created via IcoMoon. Please replace your pbfonts with thse and replace the design_system.css file.



###0.8.8  September 23, 2014
- Refactored Sass into separate files using manifest files.  Will be easier to locate specific sass for a page
- Updates and improvements to gruntfile
- Updated bower and npm packages to latest versions
- Updated Angular to 1.2.23
- Fixed Kendo UI colors to match design system
- Fixed Kendo splitter to no longer require image files
- Styling and changes to Miller Columns
- Split controllers for elements into separate controllers
- Select2 Menu deprecated and removed; now using Selectize menu
- Fixes to angular toggle switch
- Reversed show/hide password in control
- Text color slightly darker

###0.85 August 12, 2014
- Separated Kendo UI and UI-Bootstrap into their own CSS files
- Fixed Knockout button bug

###0.8 August 11, 2014
- Fixes to Colors page, added sample charts in all colors

###0.75 August 5, 2014
- Converted project to use SASS instead of LESS.  Updated Gruntfile to compile SASS files, removed LESS code.  Please be sure to run npm install if downloading entire package.
- This **does not affect** the CSS file in /dist
- Made some other fixes to clean up paths

###0.73 July 29,2014
- Fixed styling buf on home page of live preview
- updated Grunt serve command to inject css on recompile rather than force a reload.  Finally.

###0.72 July 29, 2014

- Updates to fix a couple of styling bugs introduced when changing the Gray color.

###0.71 July 28,2014

- Small update to fix the CSS file from Bootstrap UI not being compiled into vendor.css

###0.7 July 28, 2014

- Updates to color palette for accessibility
  - Eliminated "gray-mid" and moved some text objects, such as labels, to "gray-text".
  - New "gray" added for elements such as rules and borders
  - Revised Blue and Yellow
  - Adjusted Blues
- Added separate page with alternative Angular Bootstrap UI components.  The layout of this section is still being worked on.
- Overrode some Bootstrap colors and styles that still persisted
- Clarified Alerts pages a bit more
- Most, if not all, JS code converted to Angular JS directives


###0.6 - July 18, 2014

- Updated to use Bootstrap 3.2
- Added Kendo UI splitter
- Added range slider
- Added animated progress button
- Added thin footer and footer without social icons
- Added stacked 2-row header
- Fixes to the "user menu" at the top right
- Other menu fixes
- Fine-tuned several colors
- Added vendor.css to the DIST folder.  This compressed css file includes all the css from the various vendor add-ons used in the DS
- Fixes to state colors in toggle buttons
- Updated the angular code for the prepended checkbox
- Much cleanup done to the Live Preview

###0.5 - June 27, 2014

- Removed Font Awesome from Bower, using CDN instead.
- Alerts:
	- updated modal dialogs
	- finalized colors and layout
	- removed cancel buttons from dialogs
- Inputs
	- fixed angular toggle switches
	- prepended checkbox field
	- updated calendar picker
	- reorganized page and support text
- Icons
	- Updated page layout
- Buttons
	- Updated page layout


###0.4 - June 17, 2014

- Colors:
	- Added extended color palette, with colors for charts
- Alerts:
    - Added modal alert boxes and dialog boxes
- Inputs:
	- made clear prepended and appended icons the default
	- changed button type in prepend/append to primary
	- Added **Select2** menu and multi-picker
- Icons:
	- organized FA icons by type
	- added "pb-folder-add" icon
- Added **Isotope** image gallery
- Cleaned up home page and used chart colors for charts

###0.3 - May 29, 2014

- Inputs:
  - removed inner shadows
  - added date/time picker
  - fixed error color
  - added Multi-select with checkboxes
  - added "clear" prepended and appended form fields
  - added small and large field sizes
  - added link to the page for the date/time picker plugin docs
- Alerts
	- normalized color palette
	- added simple contextual color backgrounds
	- added disconnected transitory alert (more options coming)
- Tables
	- added "extra compressed" variant
- Text
	- added contextual colors
- Accordions
  	- replaced Angular accordion with simple Bootstrap one
  	- added "compact" variant with no space between
  	- added a simple collapsing div
  	- separated tabs onto their own page
- Tabs
   - switched to Bootstrap tabs
   - added better vertical variant
