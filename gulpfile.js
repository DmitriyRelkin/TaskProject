'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
// gulp.task('sass:build', function () {
gulp.task('sass', function () {
  return gulp.src('./website/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./website/css')); 
});
 
gulp.task('sass:watch', function () {
	gulp.watch("./website/scss/**", ['sass']);
});

// gulp.task('sass', ['sass:build', 'sass:watch']);