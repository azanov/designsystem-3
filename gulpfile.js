/*
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-cache del gulp-usemin gulp-rev gulp-minify-html browser-sync gulp-connect gulp-plumber gulp-filter gulp-util gulp-ftp gulp-prompt run-sequence --save-dev
 */

/*jshint strict:false */
/*jshint node:true */


var gulp         = require('gulp'),
    usemin       = require('gulp-usemin'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    minifyhtml   = require('gulp-minify-html'),
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
    ftp          = require('gulp-ftp'),
    printfiles   = require('gulp-print'),  // displays files in the console
    prompt       = require('gulp-prompt'), // asks for password in the console before connecting
    runSequence  = require('run-sequence');




//styles
gulp.task('sass', function() {
  return sass('app/assets/sass/app.scss', { sourcemap: true })
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ios 6', 'android 4']
  }))
  .pipe(sourcemaps.write('maps', {
    includeContent: false,
    sourceRoot: '/source'
  }))
  .pipe(gulp.dest('app/assets/css'))
  .pipe(filter('**/*.css'))
  .pipe(reload({stream:true}));
});

gulp.task('styles-nomaps', function() {
  return sass('app/sass/', { sourcemap: false })
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ios 6', 'android 4']
  }))
  .pipe(gulp.dest('build/styles'))
  .pipe(filter('**/*.css'));
});



gulp.task('usemin', function() {
  gulp.src('app/*.html')
    .pipe(usemin({
      css: [minifycss(), 'concat'],
      //html: [minifyhtml({empty: true})],
      js: [uglify({mangle: false})]
    }))
    .pipe(gulp.dest('build/'));
  });




// for final build, paths stored in external json file:
var config = require('./build.config.json');

gulp.task('scripts', function(){
  gulp.src(config.extras.js)
  .pipe(gulp.dest(config.build_dir));
});
gulp.task('assets', function(){
  gulp.src(config.extras.assets)
  .pipe(gulp.dest(config.build_dir));
});




gulp.task('clean', function(cb) {
    del(['build/**/*'], cb);
});


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browsersync({
    server: {
      baseDir: "./app"
    }
  });
});




// run this to open project in browser and watch for changes in CSS
gulp.task('default',['sass','browser-sync', 'watch']);

// gulp.task('build', ['clean'],function() {
// 	gulp.run(['styles-nomaps','usemin','scripts','assets']);
// });

gulp.task('build', function(cb) {
  runSequence(
    'clean',
    ['styles-nomaps','usemin','scripts','assets'],
    cb);
});



//watch files for changes
gulp.task('watch', function () { //'default'
  gulp.watch(
    [
      'app/assets/sass/**/*.scss',
      'app/modules/**/*.scss'
    ], ['sass']);

  gulp.watch([
    'app/**/*.js',
    'app/**/*.json',
    'app/**/*.html'], function(){
      browsersync.reload();
  });

});
