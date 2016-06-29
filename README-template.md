#Design System 3 Template

##Page structure
- Each page is composed of `section` tags.  The first thing in each section is a `div class="row"` with a `div class="col-md-12"` and the section's title as an `H1`.
- Each section has an `id` corresponding to the top-level section heading on the side nav (example: `id="overview"`).
- Each block of content inside the section should be a `div class="row"` with a `div class="col-md-12"` inside it.
- Each **sub**-section is begun with a `div class="row"`, `div class="col-md-12"` and an `H2`. This `H2` has an `id` that corresponds with its link on the side nav.


### Example:


```html
<section id="overview">
  <div class="row">
    <div class="col-md-12">
      <h1>Overview</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <p>
        We have two styles of checkboxes: enhanced and standard OS.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h2 id="usage">Usage</h2>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <ul>
        <li>When possible, you should use the enhanced style.</li>
        <li>If your product has long lists of checkboxes (and space is an issue), consider using the standard OS style.</li>
        <li>Use the same style for your checkboxes and radio buttons, and apply that style consistently across your product.</li>
      </ul>
    </div>
  </div>
</section>
```
##Page side nav
The sidenav is constructed as follows:
```html
<div headroom class="doc-side-nav headroom" tolerance="50" offset="240" classes="{'initial':'','pinned':'','unpinned':'','top':'headroom-top','notTop':'headroom-not-top'}">

  <nav class="hidden-print hidden-xs hidden-sm" role="tablist">
    <ul class="nav">

      <li du-scrollspy="overview">
        <a ui-sref="checkboxes({'#':'overview'})" du-scrollspy>Overview</a>
        <ul class="nav" du-spy-context="overview">
          <li><a ui-sref="checkboxes({'#':'usage'})" du-scrollspy>Usage</a></li>
        </ul>
      </li>

      <li du-scrollspy="stacked">
        <a ui-sref="checkboxes({'#':'stacked'})" du-scrollspy>Stacked Checkboxes</a>
        <ul class="nav" du-spy-context="stacked">
          <li><a ui-sref="checkboxes({'#':'enhancedStacked'})" du-scrollspy>Enhanced Stacked</a></li>
          <li><a ui-sref="checkboxes({'#':'osStacked'})" du-scrollspy>OS Stacked</a></li>
        </ul>
      </li>

      <li du-scrollspy="inline">
        <a ui-sref="checkboxes({'#':'inline'})" du-scrollspy>Inline Checkboxes</a>
        <ul class="nav" du-spy-context="inline">
          <li><a ui-sref="checkboxes({'#':'enhancedInline'})" du-scrollspy>Enhanced Inline</a></li>
          <li><a ui-sref="checkboxes({'#':'osInline'})" du-scrollspy>OS Inline</a></li>
        </ul>
      </li>

    </ul>
  </nav>

</div>

```
### Things to note:

- The outer div and its attributes never change
- Next inside the outer div is a `nav` tag: ` <nav class="hidden-print hidden-xs hidden-sm" role="tablist">`.


- Next is a `<ul class="nav">` which holds the whole menu.
- Each top-level section is an `<li du-scrollspy="overview">` where `overview` is the `id` of the corresponding `<section>` tag described earlier.
- Inside this `li` is at least an `a` tag:
  `<a ui-sref="checkboxes({'#':'usage'})" du-scrollspy>Overview</a>`
- Note that the `ui-sref` tag includes first the current route of the page -- here, `checkboxes()` -- and inside the parens is `{'#':'usage'}` where the anchor name is "usage"
- _If there are subsections_ add a `<ul class="nav" du-spy-context="overview"`, where `overview` is the `id` as described above
- The actual subsections are `li` tags inside this `ul`, as described above:
  `<li><a ui-sref="checkboxes({'#':'usage'})" du-scrollspy>Usage</a></li>`
- Continue to add top-level `li` tags and enclosed `ul`/`li` tags as needed.  Follow the example above.

## Alerts/Warnings/Info blocks

Alerts should be placed in their own row, although you can put multiple alerts in one row as needed:

```html
<div class="row">
  <div class="col-md-12">
    <div class="alert alert-warning alert-noborder">
      As a best practice, we highly recommend using the button tag element whenever possible to ensure mathcing cross-browser rendering.
    </div>
    <div class="alert alert-info alert-noborder">
      Learn more about Cost Accounts in the Help section.
    </div>
  </div>
</div>
```

Alerts are simple divs with the classes `alert alert-warning alert-noborder` (or `alert-info`). The `alert-noborder` class must be the last class



## Badges

Badges are used to indicate that a particular subsection has been either added in a recent version or is deprecated as of a specific versionof the DS

```html
<h2 id="osStacked">
  Standard OS Stacked Checkboxes
  <span class="badge badge-deprecated">Deprecated in v2.0.0</span>
</h2>
```

They are placed after the section `H2` as a `span` with a class of `badge` and a second class of either `badge-added` or `badge-deprecated`

The version is included as `v` and the semver version number, as above

## Live Examples

Live examples should be enclosed with a `figure` tag, as follows:

```html
<div class="row">
  <div class="col-md-12">
    <figure>
      <figcaption>Short Description</figcaption>
      <!-- code for live sample here -->
    </figure>
  </div>
</div>
```

If a heading is needed for the sample, use a `<figcaption>` as above



## Code Snippets

Code Snippets use the directive `pb-code-snippet` and the number/title of tabs and the content are entered in the page's controller.

When there is the occasional _Plunkr_ link, it should be placed inside the `doc-body-snippet` div and just  before the directive, as in:

```html
<div class="row">
  <div class="col-md-12">
    <div class="doc-body-snippet">
      <div class="extra-links pull-right">
      <a class="plunker" href>
        <i class="nc-icon-mini arrows-1_share-91" aria-hidden="true"></i>
        Plunker
      </a>
      <a class="copy-code" href>
        <i class="nc-icon-mini files_copy" aria-hidden="true"></i>
        Copy Code
      </a>
      </div>
      <pb-code-snippet options="check.stackedSnippets"></pb-code-snippet>
    </div>
  </div>
</div>
```

Note that the links are in a `<div class="extra-links pull-right">`
