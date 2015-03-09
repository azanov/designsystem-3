
// FTP

var userName = '';
var userPass = '';

// 1 You call this task to FTP. It first runs the task in the brackets...
gulp.task('ftp', ['prompt_password'], function()
{
    return gulp.src('build/**/*')
    .pipe(printfiles())
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
