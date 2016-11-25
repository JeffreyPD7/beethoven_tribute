//var gulp = require('time-require');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();	

//Browser-Sync
gulp.task('serve',[styles],function() {
	browserSync.init({
		server: {
			baseDir: "./public"

});

//Setting Sass
gulp.task('styles', function() {
	gulp.src('assets/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'))
});

//Watch Task
gulp.task('default', function() {
	gulp.watch('assets/scss/style.scss',['styles']);
});


