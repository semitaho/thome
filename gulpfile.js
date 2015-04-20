var gulp = require('gulp');
var jade = require('gulp-jade');
var webserver = require('gulp-webserver');

var watchfiles = 'src/*.jade';

var webrootdir = 'www';
var htmlfiles = 'client/**/*.html';
var cssfiles = 'client/css/**/*.css';
var jsfiles = 'client/js/**/*.js';

gulp.task('jade', function() {
	return gulp.src(watchfiles)
		.pipe(jade({
	  		 pretty: true
	  	 	}))
	    .pipe(gulp.dest(webrootdir))
});

gulp.task('watch', function(){
	gulp.watch(watchfiles, ['jade']);


});
gulp.task('webserver', function(){
	return gulp.src(webrootdir).pipe(webserver({
      livereload: true,
      open: 'http://0.0.0.0:9001/index.html',
      port: 9001,
      host: '0.0.0.0'
   }));
});


gulp.task('build', ['templates']);

gulp.task('copyhtml', function(){
	return gulp.src(htmlfiles).
		pipe(gulp.dest(webrootdir));

});


gulp.task('copycss', function(){
	return gulp.src(cssfiles).
		pipe(gulp.dest(webrootdir+'/css'));

});
gulp.task('default', ['jade', 'watch', 'webserver'], function() {	
	gulp.watch(htmlfiles, ['copyhtml']);
	gulp.watch(cssfiles, ['copycss']);
	gulp.watch(jsfiles, ['compilejs']);
	
});