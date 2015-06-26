// Gulp Config File


//
// VARIABLES
//

var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    spawn = require('child_process').spawn,
    express = require('express');

    // Error handling, hmmmm.....
    // notify = require("gulp-notify"),
    // plumber = require('gulp-plumber');

// Paths
var paths = {
    scripts: ['js/*'],
    images: ['../imgs/*','../imgs/work/*',],
    styles: ['css/*.scss']
};

var port = 4000;


//
// TASKS
//

// Task: Sass
gulp.task('sass', function () {

    // use the above file path variable to find sass
    gulp.src(paths.styles)

    .pipe(sass({style: 'compressed'}))
    .pipe(prefix(["last 1 version", "> 1%", "ie 8", "ie 7"],{map: false }))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))

    // Place in dest folder
    .pipe(gulp.dest('../assets/css/'))
    .pipe(gulp.dest('../_site/assets/css/')) // Copy to static dir to avoid jekyll having to run again just to copy it over

});

// Task: Scripts
gulp.task('scripts', function() {
    gulp.src(paths.scripts)
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('../assets/js'))
});

// Task: Jekyll
// Run jekyll and put the files in the `_/site` directory
gulp.task('jekyll', function () {
    var jekyll = spawn('jekyll', [
        'build',
        '--config', '../_config.yml',
        '--source', '../',
        '--destination', '../_site'
    ]);
    jekyll.on('exit', function (code) {
        console.log('-- Finished Jekyll Build --')
    })
});

// Task: Serve
// serve the `_site/` directory jekyll creates on to http://localhost:4000/
gulp.task('serve', function () {
    var app = express();
    app.use(express.static('../_site'));
    app.listen( port );
    console.log('-- The site can be viewed at localhost:' + port + ' --')
});



// Watch for changes
gulp.task('watch', function () {

    gulp.watch((paths.styles), ['sass']);
    gulp.watch((paths.scripts), ['scripts']);

    // Run jekyll when a file html or markdown fil is changed
    // MAKE SURE that the last to items in the watchlist are included or else infinite jekyll loop
    gulp.watch(['../*.html', '../*/*.html', '../*/*.md', '!../_site/**', '!../_site/*/**'], ['jekyll']);


})


gulp.task('default', ['sass', 'jekyll', 'serve', 'watch']);
