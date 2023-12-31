'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('all', function () {
   return gulp.src('./scss/**/*.scss')
   .pipe(concat('styles.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'));
});