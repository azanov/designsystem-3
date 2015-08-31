/*jshint strict:false */
/*jshint node:true */

var gulp = require('gulp'),
  usemin = require('gulp-usemin'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  minifyHtml = require('gulp-minify-html'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  connect = require('gulp-connect'),
  browsersync = require('browser-sync'),
  reload = browsersync.reload,
  rev = require('gulp-rev'),
  sourcemaps = require('gulp-sourcemaps'),
  filter = require('gulp-filter'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  del = require('del'),
  gutil = require('gulp-util'),
  printfiles = require('gulp-print'),
  prompt = require('gulp-prompt'),
  ftp = require('vinyl-ftp'),
  runSequence = require('run-sequence'),
  header = require('gulp-header'),
  replace = require('gulp-replace'),
  ngAnnotate = require('gulp-ng-annotate');

var today = new Date();
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * ' + today + ' ',
  ' */',
  ''
].join('\n');

// clean dist folder
gulp.task('clean:dist', function(cb) {
  return del(['./build'], cb);
});

//styles
gulp.task('sass', function() {
  sass('app/assets/sass/', {
      sourcemap: true,
      style: 'compact'
    })
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: '/source'
    }))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(filter('**/*.css'))
    .pipe(reload({
      stream: true
    }));
});



gulp.task('sass-nomaps', function() {
  return sass('app/assets/sass/', {
      sourcemap: false,
      style: 'compact'
    })
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('cssrelease', ['fontrelease'], function() {
  gulp.src([
    'build/assets/css/design_system.css'
  ])
  .pipe()
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('fontrelease', function() {
  gulp.src([
    'build/assets/fonts/**/*'
  ])
  .pipe(gulp.dest('./dist/fonts'));
});


// experiment 8-18
// gulp.task('sass', function() {
//   return sass('./app/assets/sass')
//     .on('error', function(err) {
//       console.error('Error!', err.message);
//     })
//     .pipe(gulp.dest('./app/assets/css'))
//     .pipe(reload({
//       stream: true
//     }));
// });
// gulp.task('autoprefixer', ['sass'],  function() {
//   return gulp.src('./app/assets/css/')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([autoprefixer({
//       browsers: ['last 2 versions']
//     })]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./app/assets/css'));
// });
//
//


//usemin
gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      // css: [minifyCss()],
      // html: [minifyHtml({
      //   empty: true
      // })],
      vendorjs: [uglify({
        mangle: true
      })],
      appjs: [
        replace('debug: true', 'debug: false'),
        ngAnnotate({
          remove: true,
          add: true,
          single_quotes: true
        }),
        uglify({
          mangle: true
        })
      ]
    }))
    .pipe(gulp.dest('./build'));
});

//copy modules
gulp.task('copy:modules', [], function() {
  gulp.src([
      './app/modules/**/i18n/*',
      './app/modules/**/templates/**',
      './app/modules/**/assets/images/**'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy core templates views
gulp.task('copy:core-templates', [], function() {
  gulp.src([
      './app/core/templates/*'
    ])
    .pipe(gulp.dest('./build/core/templates'));
});

//copy modules data json
gulp.task('copy:json-data', [], function() {
  gulp.src([
      './app/modules/**/services/**/*.json'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy core data json
gulp.task('copy:json-core-data', [], function() {
  gulp.src([
      './app/core/data/**/*.json'
    ])
    .pipe(gulp.dest('./build/core/data/'));
});

//copy localization json
gulp.task('copy:json-i18n-data', [], function() {
  gulp.src([
      './app/modules/**/i18n/**/*.js'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy fonts
gulp.task('copy:fonts', [], function() {
  gulp.src([
      './app/assets/fonts/*'
    ])
    .pipe(gulp.dest('./build/assets/fonts'));
});

//copy images
gulp.task('copy:images', [], function() {
  gulp.src([
      './app/assets/images/**/*'
    ])
    .pipe(gulp.dest('./build/assets/images'));
});

//copy core/config
gulp.task('copy:core-config', [], function() {
  gulp.src([
      './app/core/config/*'
    ])
    .pipe(gulp.dest('build/core/config'));
});

gulp.task('clean', function(cb) {
  del(['build/**/*'], cb);
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browsersync({
    server: {
      baseDir: './app'
    }
  });
});

// run this to open project in browser and watch for changes in CSS
gulp.task('default', ['sass', 'browser-sync', 'watch']);

// run from the build folder
gulp.task('serve-build', [], function() {
  browsersync({
    server: {
      baseDir: './build'
    }
  });
});

// gulp.task('build', ['clean'],function() {
//  gulp.run(['sass-nomaps','usemin','scripts','assets']);
// });

//build
gulp.task('build', ['clean:dist', 'sass-nomaps'], function() {
  runSequence(
    'usemin',
    'copy:modules',
    'copy:core-templates',
    'copy:json-data',
    'copy:json-core-data',
    'copy:images',
    'copy:fonts',
    'copy:core-config',
    'copy:json-i18n-data'
  );
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(
    ['app/assets/sass/**/*.scss', 'app/modules/**/*.scss'], ['sass']);

  gulp.watch(
    [
      'app/core/**/*.js',
      'app/modules/**/*.js',
      'app/core/**/*.json',
      'app/core/**/*.html',
      'app/modules/**/*.html'
    ],
    function() {
      reload();
    });

});
