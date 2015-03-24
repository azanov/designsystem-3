/*
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-cache del gulp-usemin gulp-rev gulp-minify-html browser-sync gulp-connect gulp-plumber gulp-filter gulp-util gulp-ftp gulp-prompt run-sequence --save-dev
 */

/*jshint strict:false */
/*jshint node:true */


var gulp = require('gulp'),
  usemin = require('gulp-usemin'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  minifyhtml = require('gulp-minify-html'),
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
  del = require('del'),
  gutil = require('gulp-util'),
  ftp = require('gulp-ftp'),
  printfiles = require('gulp-print'), // displays files in the console
  prompt = require('gulp-prompt'), // asks for password in the console before connecting
  runSequence = require('run-sequence'),
  header = require('gulp-header');

//styles
gulp.task('sass', function() {
  return sass('app/assets/sass/app.scss', {
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
  return sass('app/sass/', {
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
    .pipe(gulp.dest('build/styles'))
    .pipe(filter('**/*.css'));
});

gulp.task('usemin', function() {
  gulp.src('app/*.html')
    .pipe(usemin({
      css: [minifycss(), 'concat'],
      //html: [minifyhtml({empty: true})],
      js: [uglify({
        mangle: false
      })]
    }))
    .pipe(gulp.dest('build/'));
});

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

// for final build, paths stored in external json file:
var config = require('./build.config.json');

gulp.task('scripts', function() {
  gulp.src(config.extras.js)
    .pipe(gulp.dest(config.buildDir));
});
gulp.task('assets', function() {
  gulp.src(config.extras.assets)
    .pipe(gulp.dest(config.buildDir));
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

// gulp.task('build', ['clean'],function() {
//  gulp.run(['sass-nomaps','usemin','scripts','assets']);
// });

gulp.task('build', function(cb) {
  runSequence(
    'clean', ['sass-nomaps', 'usemin', 'scripts', 'assets'],
    cb);
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(
    ['app/assets/sass/**/*.scss'], ['sass']);

  gulp.watch(
    [
    'app/**/*.js',
    'app/**/*.json',
    'app/**/*.html'
  ], function() {
    reload();
  });

});
