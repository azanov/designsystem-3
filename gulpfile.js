

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
  printfiles = require('gulp-print'),
  prompt = require('gulp-prompt'),
  ftp = require('vinyl-ftp'),
  runSequence = require('run-sequence'),
  header = require('gulp-header'),
  ngAnnotate = require('gulp-ng-annotate');

//styles
gulp.task('sass', function() {
  return sass('app/assets/sass/', {
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
    .pipe(gulp.dest('build/styles'))
    .pipe(filter('**/*.css'));
});

gulp.task('usemin', function() {
  gulp.src('app/*.html')
    .pipe(usemin({
      css: [minifycss(), 'concat'],

      //html: [minifyhtml({empty: true})],
      js: [
        ngAnnotate({
          remove: true,
          add: true,
          single_quotes: true
        }),
        uglify({
          mangle: false
        })
      ]
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




// FTP
var userName = '';
var userPass = '';

// 1 You call this task to FTP. It first runs the task in the brackets...
gulp.task('ftp', ['prompt_password'], function() {
  var conn = ftp.create({
    host: '10.50.8.173',
    user: 'userName',
    password: 'userPass',
    parallel: 10,
    log: gutil.log
  });

  var globs = [
    'build/**/*'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src(globs, {
      base: '.',
      buffer: false
    })

  //.pipe(conn.newer('/public_html')) // only upload newer files
    .pipe(conn.dest('/public_html'))
    .pipe(notify('FTP finished.'));
});

// 3 ... this is run by step 2, after finishing it falls back to 2, then 1
gulp.task('prompt_user', function() {
  return gulp.src('build/index.html')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'userInput',
      message: 'Please enter your username'
    }, function(res) {
      userName = res.userInput;
    }));
});

// 2  ...which first runs the task in the brackets...
gulp.task('prompt_password', ['prompt_user'], function() {
  return gulp.src('build/index.html')
    .pipe(prompt.prompt({
      type: 'password',
      name: 'passwordInput',
      message: 'Please enter your password'
    }, function(res) {
      userPass = res.passwordInput;
    }));
});
