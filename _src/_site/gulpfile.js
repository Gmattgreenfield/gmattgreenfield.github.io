var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*',
  styles: ['*.scss', 'sass_imports/*.scss']
};

gulp.task('sass', function () {
    gulp.src(paths.styles)
        .pipe(sass({style: 'compressed'}))
        .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"],{map: false }))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../'));
});


gulp.task('default', function () {
    gulp.watch('*.scss', ['sass']);
});
