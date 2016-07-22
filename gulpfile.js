'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
// gulp.task('sass:build', function () {
gulp.task('sass', function () {
  return gulp.src('./build/styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css/'));
});
 
gulp.task('sass:watch', function () {
	gulp.watch("./build/styles/sass/**", ['sass']);
});

// gulp.task('sass', ['sass:build', 'sass:watch']);