"use strict";

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

sass.compiler = require("node-sass");

gulp.task('serve',function(){
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch("*.html").on("change", reload);
});

gulp.task('sass',function(){
    return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('src/css'));
    });
