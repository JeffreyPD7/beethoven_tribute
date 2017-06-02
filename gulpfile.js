//var gulp = require('time-require');
var gulp = require('gulp');
var sass = require('gulp-sass');
//var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();	

//Browser-Sync
gulp.task('serve',['sass'],function() {

	browserSync.init({
		server: "./public"
	});

	gulp.watch(['scss/*.scss','scss/**/*.scss'],['sass']);

	// gulp.watch(['assets/scss/**/*.scss'],['assets/scss/1_L1170px/**/*.scss']);
	gulp.watch('public/*.html').on('change',browserSync.reload);
});

//Setting Sass
gulp.task('sass', function() {
    return gulp.src('scss/main.stl.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.reload({stream: true}));
});


// gulp.task('styles', function() {
// 	return gulp.src('assets/scss/style.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('./public/css/'))
// 		.pipe(browserSync.stream());
// });

//Run tasks on default
gulp.task('default', ['serve']);

