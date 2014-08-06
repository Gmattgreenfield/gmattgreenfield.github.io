var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');


gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"]))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../'));
});


gulp.task('default', function () {
    gulp.watch('*.scss', ['sass']);
});
