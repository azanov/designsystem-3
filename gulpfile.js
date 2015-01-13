/*
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-cache del gulp-usemin gulp-rev gulp-minify-html browser-sync gulp-connect gulp-plumber gulp-filter gulp-util gulp-ftp gulp-prompt --save-dev
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
    print        = require('gulp-print'),  // displays files in the console
    prompt       = require('gulp-prompt'); // asks for password in the console before connecting





gulp.task('styles', function() {
  return sass('app/sass/', { sourcemap: true })
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ios 6', 'android 4']
  }))
  .pipe(sourcemaps.write('maps', {
    includeContent: false,
    sourceRoot: '/source'
  }))
  .pipe(gulp.dest('app/styles'))
  .pipe(filter('**/*.css'))
  .pipe(reload({stream:true}))
  .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('styles-nomaps', function() {
  return sass('app/sass/', { sourcemap: false })
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ios 6', 'android 4']
  }))
  .pipe(gulp.dest('build/styles'))
  .pipe(filter('**/*.css'))
  .pipe(notify({ message: 'Styles Built' }));
});



gulp.task('usemin', function() {
  gulp.src('app/*.html')
    .pipe(usemin({
      css: [minifycss(), 'concat'],
      //html: [minifyhtml({empty: true})],
      js: [uglify({mangle: false}), rev()]
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



// FTP

var userName = '';
var userPass = '';

// 1 You call this task to FTP. It first runs the task in the brackets...
gulp.task('ftp', ['prompt_password'], function()
{
    return gulp.src('build/**/*')
    .pipe(print())
    .pipe(ftp({
        host: '10.50.8.173',
        user: userName,
        pass: userPass,
        remotePath: '/'
    }));
});

// 3 ... this is run by step 2, after finishing it falls back to 2, then 1, "inception-style"
gulp.task('prompt_user', function ()
{
    return gulp.src('build/index.html')
    .pipe(prompt.prompt({
        type: 'input',
        name: 'user_input',
        message: 'Please enter your username'
    }, function(res){
        userName = res.user_input;
    }));
});

// 2  ...which first runs the task in the brackets...
gulp.task('prompt_password', ['prompt_user'], function ()
{
    return gulp.src('build/index.html')
    .pipe(prompt.prompt({
        type: 'password',
        name: 'password_input',
        message: 'Please enter your password'
    }, function(res){
        userPass = res.password_input;
    }));
});


// run this to open project in browser and watch for changes in CSS
gulp.task('default',['styles','browser-sync', 'watch']);

gulp.task('build', ['clean'],function() {
	gulp.run(['styles-nomaps','usemin','scripts','assets']);
});






// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('app/sass/**/*.scss', ['styles']);

  gulp.watch('app/**/*.html', function(){
    reload();
  });

  // Watch .js files
   gulp.watch('app/scripts/**/*.js', function(){
     reload();
   });

  // Watch image files
//  gulp.watch('app/images/**/*', ['images']);



});
