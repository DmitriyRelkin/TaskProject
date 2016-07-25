'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
// gulp.task('sass:build', function () {
gulp.task('sass', function () {
  return gulp.src('./styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./website/consalting/assets/css')); 
});
 
gulp.task('sass:watch', function () {
	gulp.watch("./styles/**", ['sass']);
});

// gulp.task('sass', ['sass:build', 'sass:watch']);