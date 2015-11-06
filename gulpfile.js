var gulp = require('gulp');
var jade = require('gulp-jade');
var browserify = require('browserify');
var reactify = require('reactify');
var gutil = require('gulp-util');
var react = require('gulp-react');
var ftp = require('gulp-ftp');
var nib = require('nib');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var watchfiles = 'src/*.jade';

var webrootdir = 'www';
var stylefiles = 'src/styles/**.styl';
var mainstylfile = 'src/styles/thome.styl';

var jsxfiles = 'src/js/**/*.jsx';
var vendorjsfiles = 'src/js/vendor/**/*.js';
var mainjsfile = './src/js/main.js';

gulp.task('jade', function () {
    var compiledFiles = [watchfiles, '!**/layout.jade'];
    return gulp.src(compiledFiles)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(webrootdir))
});

gulp.task('compilejs', function () {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add(mainjsfile);
   // b.bundle();
    return b.bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest(webrootdir+'/js'));
});
gulp.task('copyjs', function () {
    return gulp.src(jsxfiles)
        .pipe(react())
        .pipe(gulp.dest(webrootdir+'/js'));
});

gulp.task('watch', function () {
    gulp.watch(watchfiles, ['jade']);
    gulp.watch(stylefiles, ['styles']);
    gulp.watch(jsxfiles, ['compilejs']);


});

gulp.task('styles', function () {
    gulp.src(mainstylfile)
        .pipe(stylus({use: nib()}))
        .pipe(gulp.dest(webrootdir + '/css'));
});

gulp.task('webserver', function () {
    return gulp.src(webrootdir).pipe(webserver({
        livereload: true,
        open: 'http://0.0.0.0:9001/index.html',
        port: 9001,
        host: '0.0.0.0'
    }));
});

gulp.task('deploy', function () {
    return gulp.src(webrootdir + '/**')
        .pipe(ftp({
            host: 'www.elisanet.fi',
            user: 'd639809',
            pass: '********'
        }))
        .pipe(gutil.noop());

});

gulp.task('build', ['templates']);
gulp.task('default', ['jade', 'compilejs', 'styles', 'watch', 'webserver']);
