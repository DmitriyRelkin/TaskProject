'use strict';

var gulp = require('gulp');

var sass       = require('gulp-sass');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var gutil      = require('gulp-util');//
var buffer     = require('vinyl-buffer');
var debug      = require('gulp-debug');
var watch      = require('gulp-watch');
var uglify     = require('gulp-uglify');
var server     = require('gulp-develop-server');
var ngdocs     = require ('gulp-ngdocs');


var  sourceFile = './website/js/app.js';
var  destFile = 'bundle.js';
var  destFolder = './website/js/';

gulp.task('sass', function () {
  return gulp.src('./website/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./website/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch("website/scss/**", ['sass']);
});

gulp.task('browserify', function() {
  return browserify(sourceFile)
  .bundle()
  .on('error', function(e) {
   gutil.log(e);
  })
  .pipe(source(destFile))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest(destFolder));
});

gulp.task('server:start', function() {
  server.listen({
    path: './server.js',
  });
});

gulp.task('watch', function () {
  gulp.watch("website/js/**/*.js", ['browserify']);
});

gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src("website/js/**/*.js")
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./website/docs'));
});

gulp.task('default', ['browserify', 'watch', "sass:watch"]);
