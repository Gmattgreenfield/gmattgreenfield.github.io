var gulp = require('gulp');
// var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');


gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../'}))
        .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"],{map: false }))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../'));
});


gulp.task('default', function () {
    gulp.watch('*.scss', ['sass']);
});
