/*jshint strict:false */
/*jshint node:true */

var gulp = require('gulp'),
  autoprefixer = require('autoprefixer-core'),
  browsersync = require('browser-sync'),
  cache = require('gulp-cache'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  del = require('del'),
  filter = require('gulp-filter'),
  ftp = require('vinyl-ftp'),
  gutil = require('gulp-util'),
  header = require('gulp-header'),
  imagemin = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  minifyCss = require('gulp-minify-css'),
  minifyHtml = require('gulp-minify-html'),
  ngAnnotate = require('gulp-ng-annotate'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  printfiles = require('gulp-print'),
  prompt = require('gulp-prompt'),
  reload = browsersync.reload,
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  rev = require('gulp-rev'),
  runSequence = require('run-sequence'),
  sass = require('gulp-ruby-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin');

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


// first process the sass files into one css file
gulp.task('sass', function() {
  return sass('./app/assets/sass')
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(reload({
      stream: true
    }));
});

// now take that one css file, autoprefix, create maps, and overwrite
gulp.task('autoprefixer', function() {
  return gulp.src('./app/assets/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({
      browsers: ['last 2 versions']
    })]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('styles', function() {
  runSequence('sass', 'autoprefixer');
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
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('build/assets/css'));
});

//usemin
gulp.task('usemin', function() {
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
      './app/modules/**/templates/*',
      './app/modules/**/assets/images/*'
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
gulp.task('default', ['styles', 'browser-sync', 'watch']);

// run from the build folder
gulp.task('serve-build', [], function() {
  browsersync({
    server: {
      baseDir: './build'
    }
  });
});


//build
gulp.task('build', ['clean:dist', 'styles'], function() {
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
    ['app/assets/sass/**/*.scss', 'app/modules/**/*.scss'], ['styles']);

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


// ------------------------------------------------------------
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
  // otherwise choose the folder whose contents should be the site root
  // turn off buffering in gulp.src for best performance
  return gulp.src(globs, {
    base: 'build',
    buffer: false
  })

  //.pipe(conn.newer('/public_html')) // only upload newer files
  .pipe(conn.dest('/design_system_staging'));

});
