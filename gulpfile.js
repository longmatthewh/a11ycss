'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
    var sass = require('gulp-sass');
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('src/sass/a11y.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['default']);
});