/*jshint strict:false */
/*jshint node:true */

var gulp       = require('gulp'),
  usemin       = require('gulp-usemin'),
  sass         = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss    = require('gulp-minify-css'),
  minifyHtml   = require('gulp-minify-html'),
  jshint       = require('gulp-jshint'),
  uglify       = require('gulp-uglify'),
  imagemin     = require('gulp-imagemin'),
  rename       = require('gulp-rename'),
  concat       = require('gulp-concat'),
  notify       = require('gulp-notify'),
  cache        = require('gulp-cache'),
  connect      = require('gulp-connect'),
  browsersync  = require('browser-sync'),
  reload       = browsersync.reload,
  rev          = require('gulp-rev'),
  sourcemaps   = require('gulp-sourcemaps'),
  filter       = require('gulp-filter'),
  plumber      = require('gulp-plumber'),
  del          = require('del'),
  gutil        = require('gulp-util'),
  printfiles   = require('gulp-print'),
  prompt       = require('gulp-prompt'),
  ftp          = require('vinyl-ftp'),
  runSequence  = require('run-sequence'),
  header       = require('gulp-header'),
  replace      = require('gulp-replace'),
  ngAnnotate   = require('gulp-ng-annotate');


// clean dist folder
gulp.task('clean:dist', function(cb) {
  return del(['./build'], cb);
});


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
    .pipe(gulp.dest('build/assets/css'))
    .pipe(filter('**/*.css'));
});

//usemin
gulp.task('usemin', [], function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({
        empty: true
      })],
      vendorjs: [uglify({
        mangle: true
      })],
      appjs: [
        replace("'debug': true", "'debug': false"),
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


//copy modules
gulp.task('copy:modules', [], function() {
  gulp.src([
      './app/modules/**/i18n/*',
      './app/modules/**/templates/*'
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
    './app/modules/**/i18n/**/*.json'
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
      './app/assets/images/*'
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


// FTP tasks
// to upload, run "gulp deploy"

var userName = '';
var userPass = '';

gulp.task('prompt_password', ['prompt_username'], function() {
  return gulp.src('build/index.html')
    .pipe(prompt.prompt({
      type: 'password',
      name: 'passwordInput',
      message: 'Please enter your password'
    }, function(res) {
      userPass = res.passwordInput;
    }));
});

gulp.task('prompt_username', function() {
  return gulp.src('build/index.html')
    .pipe(prompt.prompt({
      type: 'input',
      name: 'usernameInput',
      message: 'Please enter your username'
    }, function(res) {
      userName = res.usernameInput;
    }));
});

gulp.task('deploy', ['prompt_password'], function() {
  var conn = ftp.create({
    host: '10.50.8.173',
    user: userName,
    password: userPass,
    parallel: 10,
    log: gutil.log
  });
  var globs = [
    'build/**'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp.src(globs, {
      base: 'build',
      buffer: false
    })

    //.pipe(conn.newer('/public_html')) // only upload newer files
    .pipe(conn.dest('/design_system_staging'));

});
